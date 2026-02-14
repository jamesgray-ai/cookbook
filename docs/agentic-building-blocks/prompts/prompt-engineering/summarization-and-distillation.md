---
title: Summarization and Distillation
description: Techniques for compressing, restructuring, or extracting essential information from longer content using AI prompts.
---

# Summarization and Distillation

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What It Is

Techniques for compressing, restructuring, or extracting the essential information from longer content. Summarization condenses while preserving meaning; distillation extracts the core principles or key takeaways, often transforming the format — for example, turning a report into action items or a research paper into a one-page brief.

The distinction matters: summarization is *compression* (same content, fewer words), while distillation is *transformation* (different format, different emphasis, tailored for a specific audience or purpose).

## Why It Works

Large language models (LLMs) excel at identifying important information and restructuring it because they have been trained on vast amounts of human-written summaries, abstracts, and briefs. The key is giving them clear criteria for what "important" means in your context — otherwise they will make assumptions about what to keep and what to cut, and those assumptions may not match your needs.

## When to Use It

- Condensing long documents, reports, or meeting transcripts
- Extracting action items or key decisions from text
- Creating executive summaries from detailed analyses
- Transforming content for a different audience or format
- Research synthesis across multiple sources

## The Pattern

### Standard summarization

```text
Summarize the following {content type} in {length constraint}.
Focus on: {what to prioritize}
Exclude: {what to omit}
Format: {desired output structure}
Audience: {who will read the summary}

{Content to summarize}
```

### Chain of Density variation

Based on Adams et al. 2023, this technique progressively increases information density while holding length constant:

```text
Summarize the following article in 3-5 sentences.
Then make the summary denser: rewrite it to include more key details
from the article while keeping the same length.
Repeat once more, making it even denser.
Provide all three versions.
```

Here is a filled-in standard example:

```text
Summarize this quarterly earnings call transcript in 200 words.
Focus on: revenue figures, guidance changes, and strategic shifts.
Exclude: analyst questions, boilerplate legal disclaimers.
Format: three bullet sections — Results, Guidance, Strategy.
Audience: portfolio manager reviewing 15 earnings calls today.

[transcript text]
```

## Examples in Practice

### Example 1: Meeting Summary

**Context:** You have a 45-minute meeting transcript and need to extract what matters for the people who weren't in the room.

```text
Summarize this meeting transcript.
Focus on: (1) decisions made, (2) action items with owners and
deadlines, (3) open questions.
Exclude: pleasantries, off-topic discussions, and repeated points.
Format: three sections with bullet points under each.
Keep it under 300 words.
```

**Why this works:** The criteria for inclusion and exclusion are explicit, so the model knows exactly what to keep and what to drop.

### Example 2: Research Distillation

**Context:** A 20-page research report needs to reach C-suite executives who have five minutes to read it.

```text
Distill the key findings from this 20-page research report into a
one-page executive brief.
Audience: non-technical C-suite.
For each finding: state it in one sentence, explain why it matters
to the business, and note any caveats.
Include a "So What?" section at the end with recommended actions.
```

**Why this works:** It defines a *transformation*, not just compression — each finding must be repackaged with business relevance and caveats, producing output structured for decision-making.

### Example 3: Progressive Summarization

**Context:** Different stakeholders need the same article at different levels of detail.

```text
Give me three versions of a summary for this article:

(1) A 3-sentence TL;DR
(2) A 5-bullet executive summary with key data points
(3) A 200-word narrative summary suitable for a newsletter

Label each version clearly.
```

**Why this works:** Different stakeholders need different summary depths — requesting all three in one prompt ensures consistency across versions.

## Common Pitfalls

!!! warning "Undefined 'important'"
    **Problem:** "Summarize this article" without specifying what's important. The model chooses for you, and may focus on the wrong elements.

    **Fix:** Always specify what to prioritize — decisions? data points? recommendations? risks? The focus criteria are as important as the length constraint.

!!! warning "Lossy compression"
    **Problem:** Critical details get dropped when the length constraint is too tight for the content density.

    **Fix:** After summarizing, ask "What important information was excluded from this summary?" to audit what was lost. Adjust the length constraint or split into multiple summaries if needed.

!!! warning "Summary vs. analysis"
    **Problem:** Asking for a summary when you actually need analysis or recommendations. These are different tasks.

    **Fix:** Be clear about the task — "Summarize what happened" describes events, while "Analyze what happened and recommend what to do next" requires evaluation and judgment. Use the right verb.

## Related Techniques

- [Output Formatting](output-formatting.md) — structure summaries for readability
- [Direct Instruction](direct-instruction.md) — clear instructions improve summary quality
- [Chain-of-Thought](chain-of-thought.md) — reasoning through what matters before summarizing
- [Prompt Engineering Overview](index.md)
- [Research use case](../../../use-cases/research.md) — summarization is a core research workflow

## Further Reading

- Adams et al. 2023 — *From Sparse to Dense: GPT-4 Summarization with Chain of Density Prompting* — [https://arxiv.org/abs/2309.04269](https://arxiv.org/abs/2309.04269)
- Jin et al. 2024 — *A Comprehensive Survey on Process-Oriented Automatic Text Summarization* — [https://arxiv.org/abs/2403.02901](https://arxiv.org/abs/2403.02901)
