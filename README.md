# FlowSight AI Demo

FlowSight AI is an **AI workflow intelligence** product for small teams (5–50) that helps you **see where work really gets stuck** and fix delivery delays using real task-flow data (Jira/Trello/ClickUp).

This repository contains a **demo landing page + architecture overview** to showcase the idea.

---

## 🚀 Startup Summary (for AWS Activate / Demo)

**Product:** FlowSight AI  
**Category:** Workflow Analytics / Delivery Intelligence / Team Operations  
**Stage:** MVP demo (pre-launch)  
**Target customers:**  
- Startups (engineering/product teams)  
- Digital agencies (multi-project delivery)  
- Remote-first teams (distributed handoffs)

**Core promise:**  
> “Know exactly why projects slip — before they slip.”

**Why now:**  
Teams are moving faster than ever, but delivery is still managed by standups + intuition. FlowSight AI turns existing task data into actionable signals.

---

## 🎯 Problem

Teams ship late, but the reason is often unclear.

Common pain points:
- Work is scattered across tools (Jira/Trello/ClickUp + chat + docs)
- Status updates are manual and unreliable
- Bottlenecks appear too late (review/approval/dependencies)
- A few people become hidden single points of failure
- Burnout grows silently before managers notice

---

## ✅ Solution

FlowSight AI connects to your existing task tools and automatically:
- maps the **real workflow** end-to-end (not what people *think* it is)
- detects **bottlenecks** and long waiting stages
- identifies **workload imbalance**
- predicts delivery risk based on **cycle time + throughput**
- explains insights in **plain language**, not complicated charts

No new process. No micromanagement.

---

## 🧠 How it works

1) **Connect tools** (Jira / Trello / ClickUp)  
2) **Ingest task events** (status changes, timestamps, assignees, deadlines)  
3) **Analyze workflow patterns** (stuck stages, overload, slow handoffs)  
4) **Generate insights** (alerts + recommendations)

---

## ⭐ Key features

- **Bottleneck detection**
  - Find stuck columns like “Review”, “QA”, “Approval”
- **Workload imbalance alerts**
  - Detect overloaded roles before delivery slips
- **Cycle time & throughput trends**
  - See what changed week-over-week
- **Delivery risk prediction**
  - Estimate realistic ship dates from actual performance
- **Team health insights**
  - Detect interruptions, re-opened tasks, scope creep signals

---

## 💰 Business Model (simple & realistic)

FlowSight AI is a **B2B SaaS** product.

Suggested pricing:
- **Starter (Free):** 1 project, core bottleneck insights  
- **Pro ($39/team/month):** unlimited projects, alerts & predictions  
- **Business ($99/month):** multi-team dashboards, priority support  

> Pricing is designed for small teams that want fast ROI without enterprise complexity.

---

## 🗺️ MVP Scope (what we will build first)

**MVP goal:** deliver value in < 10 minutes after connecting a task tool.

MVP includes:
- Connect **1 task tool** (start with Jira or Trello)
- Workflow map (columns + average time per stage)
- Bottleneck detection (top 3 stuck stages)
- Workload view (tasks per person + WIP overload flags)
- Basic “at risk” indicator per project

Not in MVP:
- Complex ML forecasting
- Multi-org permissions
- Custom enterprise reporting

---

## 📅 30-Day Roadmap

**Week 1**
- Landing page + waitlist
- Define data model (task events, cycle time, status history)

**Week 2**
- Build ingestion pipeline (webhook or polling)
- Store events + compute cycle time metrics

**Week 3**
- Build insight engine (bottleneck rules + workload scoring)
- Simple dashboard UI

**Week 4**
- Email/Slack alerts
- Onboarding improvements + first pilot users

---

## 🏗️ AWS Architecture (demo)

This demo follows a common production-ready AWS setup:

- **Route 53** for DNS
- **CloudFront + WAF** for secure edge delivery
- **ALB** as the main entry point to services
- **EKS** for running microservices and scaling workloads
- **NAT Gateway** for private subnets outbound access
- **PrivateLink / VPC Endpoints** for secure access to AWS services
- Optional application tools: **ECR, S3, Bedrock, Secrets Manager, KMS**
- Governance: **IAM, CloudTrail, CloudWatch**

## 📬 Contact

For collaboration or MVP build-out, open an issue or reach out via GitHub.
