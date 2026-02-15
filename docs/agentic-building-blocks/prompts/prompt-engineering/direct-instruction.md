---
title: Direct Instruction
description: How to write clear, explicit commands that tell the model exactly what to do, minimizing ambiguity and guesswork.
---

# Direct Instruction

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What It Is

Direct instruction means giving the model clear, explicit commands in imperative language. Instead of hinting at what you want ("It would be nice if...") or asking open-ended questions, you tell the model exactly what to do: "Write a...", "List the...", "Analyze the...". This is the foundation of effective prompting — a baseline technique that improves every other pattern.

## Why It Works

Modern LLMs (large language models) are specifically trained to follow instructions through a process called instruction tuning and RLHF (Reinforcement Learning from Human Feedback). Direct, unambiguous commands align perfectly with this training. The more explicit your instruction, the less the model has to guess about what you want — and guessing is where errors, hallucinations, and off-target responses happen.

## When to Use It

- Every prompt (this is a baseline technique, not situational)
- When [zero-shot](zero-shot-prompting.md) results are close but not quite right
- When you need precise control over what the model does and doesn't do
- When working with others who will reuse your prompts

## The Pattern

```text
{Action verb} {specific task}.
{Constraints: length, format, audience, tone}.
{What to include or exclude}.
```

**Filled-in example:**

```text
Write a 150-word product description for a wireless Bluetooth speaker.
Target audience: tech-savvy millennials.
Tone: casual and enthusiastic.
Include: battery life, water resistance, sound quality.
Exclude: technical specifications and pricing.
```

## Examples in Practice

### Structured risk assessment

**Context:** You need a concise risk analysis for a cloud migration proposal that your team can review quickly.

```text
List the top 5 risks of migrating from on-premise to cloud infrastructure.
For each risk, provide:
- A one-sentence description
- Likelihood (high/medium/low)
- One mitigation strategy

Format as a numbered list.
```

**Why this works:** Every aspect of the output is specified — the number of items, the structure of each item, and the format. The model has no room to deviate.

### Readability rewrite

**Context:** You're adapting a technical report for a general-audience newsletter and need to lower the reading level.

```text
Rewrite the following paragraph for a 9th-grade reading level. Keep the
same meaning but simplify vocabulary and shorten sentences. Do not add
new information.

[paste paragraph here]
```

**Why this works:** The constraints are explicit and measurable — reading level, meaning preservation, no additions. The "Do not add new information" instruction prevents the model from elaborating.

### Constrained comparison

**Context:** Your engineering team is choosing between two databases and needs a focused comparison, not a general overview.

```text
Compare PostgreSQL and MongoDB for a real-time analytics workload processing
10,000 events per second. Focus only on: write throughput, query flexibility,
and operational complexity. Respond in a two-column table.
```

**Why this works:** The comparison dimensions are locked down to three specific criteria, the workload is quantified, and the output format is specified. This prevents the model from producing a generic "pros and cons" list.

## Common Pitfalls

!!! warning "Polite hedging"

    **Problem:** "Could you maybe write something about..." or "I was wondering if you might be able to..." gives the model too much latitude. Hedging language signals uncertainty, and the model may mirror that uncertainty in its output.

    **Fix:** Use imperative verbs — "Write", "List", "Analyze", "Compare", "Summarize". You can still be polite, but lead with the action: "Please write a 200-word summary of..."

!!! warning "Contradictory instructions"

    **Problem:** "Be concise. Include all details." creates tension that the model resolves unpredictably. Similarly, "Write a short, comprehensive overview" sends mixed signals.

    **Fix:** Prioritize when constraints conflict — "Be concise. Prioritize the three most important details and omit the rest." Make trade-offs explicit so the model doesn't have to guess your preference.

!!! warning "Missing constraints"

    **Problem:** "Write an email" without specifying length, tone, or audience produces generic output that rarely matches what you actually need.

    **Fix:** Include at least three constraints: **audience** (who will read this), **tone** (formal, casual, persuasive), and **length** (word count or "keep it to 2-3 paragraphs"). Add format and content constraints as needed.

## Related Techniques

- [Zero-Shot Prompting](zero-shot-prompting.md) — direct instruction makes zero-shot prompts sharper
- [Output Formatting](output-formatting.md) — specify exactly how the model should structure its response
- [Contextual Prompting](contextual-prompting.md) — combine with context for domain-specific direct instructions
- [Prompt Engineering Overview](index.md)
- [Content Creation use case](../../../use-cases/content-creation/)

## Further Reading

- Ouyang et al. 2022 — *Training Language Models to Follow Instructions with Human Feedback* — [arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155)
- Wei et al. 2021 — *Finetuned Language Models Are Zero-Shot Learners (FLAN)* — [arxiv.org/abs/2109.01652](https://arxiv.org/abs/2109.01652)
- Zhang et al. 2023 — *Instruction Tuning for Large Language Models: A Survey* — [arxiv.org/abs/2308.10792](https://arxiv.org/abs/2308.10792)
