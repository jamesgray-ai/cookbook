---
title: Style Unbundling
description: Break down a writing style into individual components like tone, sentence length, and vocabulary to reproduce it precisely.
---

# Style Unbundling

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What It Is

Breaking down a writing style into its individual components — sentence length, vocabulary level, tone, use of metaphor, paragraph structure, and more — so you can describe and reproduce it precisely. Instead of saying "write like Steve Jobs," you identify *what makes* that style distinctive and instruct the model on each dimension.

Style unbundling treats voice and tone as a set of independent dials you can tune, rather than a single vague label.

## Why It Works

"Write like [person]" is ambiguous — the model may focus on the wrong stylistic elements, and its impression of that person's style may not match yours. Unbundling forces precision. When you specify "short declarative sentences, technical concepts explained through everyday analogies, building to a dramatic reveal," the model has concrete, actionable targets instead of a vague imitation task. Each attribute becomes an independent constraint that the large language model (LLM) can optimize for.

## When to Use It

- Matching a specific brand voice or editorial style
- Reproducing the tone of a reference document
- Creating consistent content across multiple pieces
- When "write like X" isn't producing the right result

## The Pattern

```text
Write about {topic} using these style attributes:
- Sentence structure: {short/long/varied, simple/complex}
- Vocabulary: {technical/accessible/colloquial, reading level}
- Tone: {formal/casual/authoritative/conversational}
- Rhetoric: {use of analogies, questions, data, stories}
- Pacing: {paragraph length, builds tension, front-loads conclusions}
- Audience: {who you're writing for}
```

Here is a filled-in example:

```text
Write about the future of remote work using these style attributes:
- Sentence structure: Mix of short punchy (5-8 words) and medium (15-20 words). No sentence over 25 words.
- Vocabulary: Accessible to non-technical readers. No jargon without definition.
- Tone: Conversational and optimistic but grounded — avoid hype.
- Rhetoric: Open with a surprising statistic, use one everyday analogy, end with a forward-looking question.
- Pacing: Short paragraphs (2-3 sentences max). Build momentum toward the closing question.
- Audience: General business readers, not HR specialists.
```

## Examples in Practice

### Example 1: Newsletter Style

**Context:** You need a 300-word newsletter intro about AI in healthcare that feels approachable, not academic.

```text
Write a 300-word newsletter intro about AI in healthcare.
Style attributes:
- Sentence structure: Mix of short punchy sentences (5-8 words) and
  medium sentences (15-20 words). No sentences over 25 words.
- Vocabulary: Accessible to non-technical readers. Define any medical
  or AI terms.
- Tone: Conversational and optimistic but grounded — avoid hype.
- Rhetoric: Open with a surprising statistic, use one everyday
  analogy, end with a forward-looking question.
- Pacing: Short paragraphs (2-3 sentences max).
```

**Why this works:** Each style dimension is independently specified, so the model knows exactly what "newsletter voice" means in this context rather than guessing.

### Example 2: Executive Brief

**Context:** You need a project status update for engineering leadership that is direct and confident.

```text
Write a project status update for the VP of Engineering.
Style attributes:
- Sentence structure: Declarative, no hedging language.
- Vocabulary: Technical terms are fine (audience is engineering
  leadership).
- Tone: Direct and confident — state conclusions, not possibilities.
- Rhetoric: Lead with the bottom line, then supporting evidence.
- Pacing: Bullet points for data, short paragraphs for narrative.
```

**Why this works:** It defines the register and information hierarchy — the model knows to front-load conclusions and avoid phrases like "it might be worth considering."

### Example 3: Brand Voice Consistency

**Context:** You have existing marketing copy and need new content that matches the same voice.

```text
Here's a paragraph from our existing marketing copy:

[paste sample paragraph]

Analyze this text and identify the style attributes: sentence length,
vocabulary level, tone, use of punctuation, rhetoric devices.
Then write a new paragraph about our enterprise security features
using the same style attributes.
```

**Why this works:** It reverse-engineers the style before reproducing it, making the implicit explicit so the model can replicate it consistently.

## Common Pitfalls

!!! warning "Too many style constraints"
    **Problem:** Specifying 10+ style attributes overwhelms the model, leading to stilted, unnatural output.

    **Fix:** Focus on 4-6 attributes that matter most. The model handles nuance better when not micromanaged on every dimension.

!!! warning "Contradictory attributes"
    **Problem:** Requesting "casual and authoritative" or "brief and comprehensive" without acknowledging the tension.

    **Fix:** When attributes conflict, prioritize explicitly — "Lean casual, but shift to authoritative when citing data."

!!! warning "Style over substance"
    **Problem:** Spending all your prompt budget on style, leaving the actual content underspecified.

    **Fix:** Define what you want to say first, then add style constraints. A beautifully styled paragraph that says the wrong thing is still wrong.

## Related Techniques

- [Output Formatting](output-formatting.md) — structure and layout complement style
- [Role Prompting](role-prompting.md) — roles implicitly bundle style attributes; unbundling makes them explicit
- [Few-Shot Learning](few-shot-learning.md) — show the desired style by example instead of describing it
- [Prompt Engineering Overview](index.md)
- [Content Creation use case](../../../use-cases/content-creation.md) — style unbundling is essential for professional content workflows

## Further Reading

- Lenny Rachitsky — *Five proven prompt engineering techniques* — [https://www.lennysnewsletter.com/p/five-proven-prompt-engineering-techniques](https://www.lennysnewsletter.com/p/five-proven-prompt-engineering-techniques)
- Liu et al. 2023 — *Learning to Generate Text in Arbitrary Writing Styles* — [https://arxiv.org/abs/2312.17242](https://arxiv.org/abs/2312.17242)
