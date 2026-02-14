---
title: Contextual Prompting
description: How to provide relevant background information in your prompt so the model gives specific, tailored responses instead of generic advice.
---

# Contextual Prompting

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

!!! info "Contextual Prompting vs. the Context Building Block"

    This page covers **contextual prompting** — the technique of including relevant information *within your prompt text*. This is different from the broader [Context building block](../../context/index.md), which covers attaching files, knowledge bases, system prompts, and other external context sources. Think of contextual prompting as one way to provide context; the Context building block covers all the ways.

## What It Is

Contextual prompting means providing relevant background information directly in your prompt so the model can give informed, specific responses. Instead of asking a generic question, you embed the who, what, where, when, and why that shape the right answer. The result is output tailored to your exact situation rather than one-size-fits-all advice.

## Why It Works

LLMs (large language models) don't have access to your specific situation — your company, your audience, your constraints, your data. Context fills that gap. When you provide relevant details, the model can tailor its output to your exact needs. Without context, the model defaults to the most common interpretation of your request, which is rarely the one you actually want.

## When to Use It

- Domain-specific tasks where generic answers won't work
- When the model needs to know your audience, industry, or constraints
- Personalizing output to a specific situation
- When you have relevant data the model should factor into its response

## The Pattern

```text
Context:
- {Who: role, audience, stakeholders}
- {What: topic, product, situation}
- {Constraints: budget, timeline, regulations}
- {Goal: what success looks like}

Task: {What you need the model to do}
```

**Filled-in example:**

```text
Context:
- I'm a marketing manager at a B2B SaaS company selling project management software
- Target audience: mid-size construction firms (50-200 employees)
- Monthly content budget: $5,000
- Goal: increase organic search traffic by 30% over 3 months

Task: Create a 3-month content calendar focused on SEO-driven blog posts
that address pain points specific to construction project management.
```

## Examples in Practice

### Industry-specific advice

**Context:** You run a small dental practice and need software recommendations that account for your staff's technical comfort level and your budget.

```text
Context:
- I run a 15-person dental practice in suburban Austin, TX
- We currently use paper scheduling and want to go digital
- Staff are mostly non-technical (ages 35-55)
- Budget: under $500/month
- Must integrate with our existing billing system (Dentrix)

Task: Recommend 3 scheduling software options with pros and cons
for my specific situation. Prioritize ease of use and Dentrix integration.
```

**Why this works:** The constraints — staff technical level, budget ceiling, specific billing system — eliminate generic recommendations and force the model to give advice that actually applies.

### Audience-aware content

**Context:** You're writing for a specialized academic audience that expects a specific register and evidence standard.

```text
Context:
- Writing for a medical journal audience (physicians and researchers)
- Topic: the impact of AI on diagnostic radiology
- Readers expect evidence-based claims with citations
- Journal word limit for abstracts: 300 words

Task: Write a 300-word abstract covering current applications,
limitations, and future directions of AI in diagnostic radiology.
Use formal academic tone throughout.
```

**Why this works:** Specifying the audience (physicians and researchers), the evidence standard (evidence-based with citations), and the format (300-word abstract) sets the register, depth, and structure the model should target.

### Data-informed analysis

**Context:** You have specific business metrics and need the model to analyze a trend rather than speculate.

```text
Context:
- Our Q3 revenue was $2.1M (up 15% from Q2)
- Customer churn increased from 3.2% to 4.8% during Q3
- We launched a new pricing tier in July
- Support tickets related to billing increased 40% since the new tier launch
- No changes to product features during this period

Task: Analyze the likely causes of the churn increase and suggest
3 specific actions we can take in Q4 to reverse the trend.
```

**Why this works:** The data points — revenue growth alongside churn increase, billing ticket spike correlating with pricing change — create a foundation for specific analysis. Without this data, the model would produce generic churn reduction advice.

## Common Pitfalls

!!! warning "Irrelevant context overload"

    **Problem:** Including your entire company history, org chart, and mission statement when asking about a specific email. Too much context dilutes the signal and wastes tokens.

    **Fix:** Include only the context that directly affects the output. Ask yourself: "If I removed this detail, would the answer change?" If not, leave it out.

!!! warning "Missing key constraints"

    **Problem:** Asking for a marketing plan without mentioning budget, timeline, team size, or target audience. The model fills in assumptions that may not match your reality.

    **Fix:** Always include constraints that would change the recommendation. Budget, timeline, audience, and existing tools/systems are almost always relevant.

!!! warning "Assuming shared knowledge"

    **Problem:** Using internal jargon, acronyms, or referencing processes without defining them. "Optimize our CSAT flow for the T2 queue" means nothing to the model without definitions.

    **Fix:** Spell out anything the model hasn't been told about. Define acronyms on first use, describe internal processes briefly, and name specific tools rather than assuming the model knows your stack.

## Related Techniques

- [Context building block](../../context/index.md) — the comprehensive guide to all forms of context (files, knowledge bases, system prompts, and more)
- [Role Prompting](role-prompting.md) — set the model's perspective as a form of context
- [Direct Instruction](direct-instruction.md) — combine clear commands with rich context for the best results
- [Prompt Engineering Overview](index.md)
- [Research use case](../../../use-cases/research.md)

## Further Reading

- Dong et al. 2022 — *A Survey on In-context Learning* — [arxiv.org/abs/2301.00234](https://arxiv.org/abs/2301.00234)
- Lewis et al. 2020 — *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks* — [arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401)
