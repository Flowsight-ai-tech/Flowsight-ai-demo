// Smooth section animations + active nav highlighting

(function () {
  const sections = Array.from(
    document.querySelectorAll(".fs-section-animate[data-section]")
  );
  const optionalSections = Array.from(
    document.querySelectorAll(".fs-optional-section")
  );
  const navLinks = Array.from(
    document.querySelectorAll(".fs-nav-links a[href^='#']")
  );
  const detailsToggle = document.getElementById("fs-toggle-details");

  if (!sections.length) return;

  // IntersectionObserver for fade-in sections
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fs-section-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  sections.forEach((section) => revealObserver.observe(section));

  // Highlight nav link based on current section
  const sectionById = new Map(sections.map((sec) => [sec.id, sec]));

  const setActiveNav = (id) => {
    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").slice(1);
      if (targetId === id) {
        link.classList.add("fs-nav-link-active");
      } else {
        link.classList.remove("fs-nav-link-active");
      }
    });
  };

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        if (id) setActiveNav(id);
      });
    },
    {
      threshold: 0.4,
      rootMargin: "-10% 0px -50% 0px",
    }
  );

  sections.forEach((sec) => activeObserver.observe(sec));

  // Smooth scroll on nav click (extra control over offset)
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.querySelector(".fs-nav")?.offsetHeight || 0;
      const rect = target.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - navHeight - 16;

      window.scrollTo({
        top: offsetTop < 0 ? 0 : offsetTop,
        behavior: "smooth",
      });
    });
  });

  // Collapse optional sections by default for a shorter, less repetitive read
  if (optionalSections.length && detailsToggle) {
    let expanded = false;

    optionalSections.forEach((sec) => {
      sec.classList.add("fs-hidden");
    });

    const updateLabel = () => {
      detailsToggle.textContent = expanded
        ? "Hide details"
        : "Show how it works & use cases";
    };

    updateLabel();

    detailsToggle.addEventListener("click", () => {
      expanded = !expanded;
      optionalSections.forEach((sec) => {
        if (expanded) {
          sec.classList.remove("fs-hidden");
        } else {
          sec.classList.add("fs-hidden");
        }
      });
      updateLabel();

      if (expanded) {
        const firstOptional = optionalSections[0];
        const navHeight = document.querySelector(".fs-nav")?.offsetHeight || 0;
        const rect = firstOptional.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - navHeight - 16;
        window.scrollTo({
          top: offsetTop < 0 ? 0 : offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
})();

