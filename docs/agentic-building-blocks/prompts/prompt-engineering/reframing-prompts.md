---
title: Reframing Prompts
description: Change how you phrase a question to activate different reasoning patterns and get fundamentally better AI responses.
---

# Reframing Prompts

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What It Is

Changing how you phrase a question or task to get a fundamentally different (and often better) response. When your initial prompt isn't producing good results, reframing approaches the same problem from a different angle — changing the perspective, reversing the question, narrowing the scope, or shifting the abstraction level.

Reframing is not about adding more detail to a bad prompt. It is about asking a *different* question that leads to the same destination through a better path.

## Why It Works

The way you frame a question determines which knowledge and reasoning patterns the model activates. A prompt framed as "What are the risks?" activates different thinking than "What would make this fail?" even though both seek similar information. This happens because large language models (LLMs) associate different framings with different types of responses based on their training data. Reframing gives you access to different parts of the model's capabilities.

## When to Use It

- When your initial prompt produces generic or unhelpful responses
- When you're stuck and need a fresh approach
- When you want to explore a problem from multiple angles
- When the obvious question isn't yielding useful answers

## The Pattern

```text
Original: {Initial prompt that isn't working well}

Reframed options:
- Inversion: "Instead of {original question}, what would {opposite}?"
- Specificity: "Instead of {broad question}, {narrower question}?"
- Perspective shift: "How would {different person/role} approach {topic}?"
- Analogy: "What is {topic} equivalent to in {different domain}?"
- Constraint: "If you could only {limitation}, how would you {task}?"
```

Here is a filled-in example using the inversion strategy:

```text
Original: How can I improve my resume?

Reframed (Inversion): You're a hiring manager who's been reviewing
resumes for 8 hours. What would make you immediately reject this
resume? What would make you stop and read it carefully?
```

## Examples in Practice

### Example 1: Inversion

**Context:** You want to improve your resume but generic advice ("use action verbs," "quantify achievements") isn't helping.

```text
You're a hiring manager who's been reviewing resumes for 8 hours.
What would make you immediately reject this resume? What would make
you stop and read it carefully?
```

**Why this works:** The inverted perspective reveals specific, actionable issues rather than generic advice, because the model draws on different training patterns when simulating a fatigued reviewer versus offering improvement tips.

### Example 2: Specificity

**Context:** You need growth advice for your business, but "How do I grow my business?" produces vague platitudes.

```text
My SaaS product has 200 users and a 5% month-over-month growth rate.
What are three specific actions I can take this month to accelerate
growth to 10% MoM, given that my marketing budget is $2,000?
```

**Why this works:** Specific constraints force specific recommendations — the model cannot fall back on generic advice when the numbers, timeline, and budget are defined.

### Example 3: Analogy

**Context:** You need to restructure your engineering team but organizational design questions produce textbook answers.

```text
My engineering team is like a restaurant kitchen. We have 12 people
and need to serve different "dishes" (products) simultaneously. How
would a head chef organize this kitchen for maximum throughput without
burning anyone out?
```

**Why this works:** Analogies unlock reasoning patterns the model might not apply to the literal question — restaurant kitchen management involves well-understood workflows, shift patterns, and specialization tradeoffs that translate directly to team design.

## Common Pitfalls

!!! warning "Reframing without purpose"
    **Problem:** Changing the phrasing randomly without understanding why the original prompt failed.

    **Fix:** Diagnose the issue first — is the prompt too vague? Too broad? Wrong perspective? Then choose a reframing strategy that addresses that specific issue.

!!! warning "Losing the original intent"
    **Problem:** The reframed question is more interesting but doesn't answer what you actually need.

    **Fix:** After reframing, check — "Does this new question still help me achieve my original goal?"

!!! warning "Only trying one reframe"
    **Problem:** The first reframe may not be the best one.

    **Fix:** Try 2-3 different reframing strategies and compare the quality of responses. Inversion, specificity, and analogy often produce very different outputs from the same starting point.

## Related Techniques

- [Role Prompting](role-prompting.md) — perspective shifts are a form of reframing through a specific persona
- [Multi-Turn Conversation](multi-turn-conversation.md) — iterative refinement across turns
- [Self-Consistency and Reflection](self-consistency-and-reflection.md) — related approach for evaluating multiple framings
- [Prompt Engineering Overview](index.md)
- [Ideation and Strategy use case](../../../use-cases/ideation-and-strategy.md) — reframing is especially powerful for brainstorming and strategic exploration

## Further Reading

- Ma et al. 2023 — *Query Rewriting for Retrieval-Augmented Large Language Models* — [https://arxiv.org/abs/2305.14283](https://arxiv.org/abs/2305.14283)
