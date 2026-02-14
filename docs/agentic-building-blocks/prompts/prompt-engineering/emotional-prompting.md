---
title: Emotional Prompting
description: Add motivational or stakes-based language to prompts to encourage the model to produce more thorough and engaged responses.
---

# Emotional Prompting

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What It Is

Emotional prompting means adding motivational, stakes-based, or emotionally charged language to your prompts to encourage the model to produce more thorough and engaged responses. Instead of a neutral request, you convey *why* the task matters or what is at stake. The goal is to signal importance in a way that shifts the model's output toward greater care and completeness.

## Why It Works

The EmotionPrompt paper (Li et al. 2023) showed that adding emotional stimuli to prompts improved LLM (large language model) performance by over 10% on several benchmarks. The likely mechanism is that emotional language activates patterns from training data where humans wrote more carefully — important emails, critical reports, heartfelt communications. Models trained via RLHF (reinforcement learning from human feedback) may also associate high-stakes framing with the kind of careful, thorough responses that human raters rewarded during training. However, this effect varies by model and task — it works more consistently on generative tasks than on factual retrieval.

## When to Use It

- Tasks where thoroughness and effort matter more than speed
- Creative writing where engagement affects quality
- When you notice the model giving generic or low-effort responses
- High-stakes outputs that need extra care and attention to detail
- Review and analysis tasks where missing something has consequences

**Do NOT use it for:**

- Simple factual queries (e.g., "What is the capital of France?")
- When precision matters more than thoroughness — emotional framing may introduce bias
- As a substitute for clear instructions — stakes language supplements good prompts, it doesn't replace them

## The Pattern

```text
{Task description}

{Emotional stake or motivation}
```

**Filled-in example:**

```text
Review this database migration script for potential data loss issues.

This migration runs against our production database with 3 years of customer data.
If anything goes wrong, we could lose records that are impossible to recreate.
Check every operation carefully.
```

## Examples in Practice

### Example 1 — Job application

**Context:** You're applying for a competitive role and need the cover letter to stand out.

```text
Write a cover letter for this job application. Here is my resume: [resume text]
Here is the job posting: [job posting text]

This is for my dream job at a company I've admired for years — the letter needs to
stand out from hundreds of applicants. Make every sentence count.
```

**Why this works:** The personal stakes encourage the model to be more thoughtful and deliberate, avoiding generic filler and focusing on differentiation.

### Example 2 — Contract review

**Context:** You need a thorough review of a legal clause before signing a major deal.

```text
Review this contract clause for potential risks:

[paste contract clause here]

This is a $2M deal and my client is counting on me to catch anything that could
hurt them. Be thorough and flag even minor concerns that could become problems
down the line.
```

**Why this works:** The financial stakes and responsibility framing promote careful, exhaustive analysis rather than a surface-level summary.

### Example 3 — Code debugging

**Context:** A payroll function needs to be bulletproof because errors affect real people.

```text
Debug this Python function that calculates payroll:

[paste function here]

This runs for 500 employees every two weeks and any error means people get paid
incorrectly. Check every edge case — overtime calculations, rounding, tax
brackets, part-time vs. full-time distinctions.
```

**Why this works:** The real-world consequences (people being paid incorrectly) encourage exhaustive edge-case checking that a neutral prompt might not elicit.

## Common Pitfalls

!!! warning "Overuse dilutes impact"
    **Problem:** Adding emotional stakes to every prompt makes none of them feel important — the model (and you) become desensitized to the framing.
    **Fix:** Reserve emotional prompting for tasks that genuinely need extra care. If everything is "critical" and "high-stakes," nothing is.

!!! warning "Emotional manipulation over clarity"
    **Problem:** Relying on emotional language instead of clear instructions. "This is really important, please do a good job" doesn't tell the model *what* to do well.
    **Fix:** Write clear, specific instructions first, then add stakes framing. Emotional prompting supplements a well-structured prompt — it doesn't replace one.

!!! warning "Results vary by model"
    **Problem:** The EmotionPrompt results were on specific benchmarks with specific models. The effect size may differ with different models, tasks, and prompt formulations.
    **Fix:** Test with and without emotional framing on your specific use case. If the output quality is the same either way, the technique isn't adding value for that task.

## Related Techniques

- [Role Prompting](role-prompting.md) — assign a persona whose role implies high stakes
- [Direct Instruction](direct-instruction.md) — be explicit about what thoroughness means for your task
- [Contextual Prompting](contextual-prompting.md) — provide background that naturally conveys importance
- [Prompt Engineering Overview](index.md)
- [Content Creation use case](../../../use-cases/content-creation.md) — emotional prompting is particularly effective for creative and communication tasks

## Further Reading

- Li et al. 2023 — *EmotionPrompt: Leveraging Psychology for Large Language Models Enhancement via Emotional Stimulus* — [arxiv.org/abs/2307.11760](https://arxiv.org/abs/2307.11760)
