---
title: Self-Consistency and Reflection
description: Ask the model to evaluate, critique, and improve its own output or approach a problem from multiple angles to increase reliability.
---

# Self-Consistency and Reflection

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What It Is

Self-consistency and reflection are two related techniques for improving the reliability of LLM (large language model) output. **Self-reflection** asks the model to critique and revise its own work — essentially adding a review step. **Self-consistency** generates multiple independent reasoning paths and compares them, using agreement as a confidence signal. Both techniques help catch errors that the model might make on a first pass.

## Why It Works

LLMs can often identify errors in text more easily than they can avoid making them in the first place. By adding an explicit review step, you leverage this asymmetry. Self-reflection (Shinn et al. 2023, Madaan et al. 2023) asks the model to critique and revise its own output in an iterative loop. Self-consistency (Wang et al. 2022) takes a different approach: it generates multiple independent answers and uses agreement as a confidence signal.

!!! info "Self-consistency vs. self-reflection — an important distinction"
    These are related but different techniques. **Self-consistency** (Wang et al. 2022) involves sampling multiple reasoning paths — typically using temperature > 0 to get genuine variation — and taking the majority answer. It is about *diversity of reasoning*. **Self-reflection** is about *iterative improvement* — generating one output, critiquing it, then revising. Both are valuable, but they work through different mechanisms.

## When to Use It

- High-stakes outputs where errors have real consequences
- Complex analysis where the first attempt may miss something
- When you need confidence in the answer (especially for quantitative problems)
- Fact-checking or reviewing model-generated content
- Code review and debugging
- Any task where "close enough" isn't good enough

## The Pattern

Self-reflection:

```text
{Generate initial output}

Now review your response:
1. Identify any errors, gaps, or weak points
2. Rate your confidence (high/medium/low) in each section
3. Provide a revised version addressing the issues you found
```

Self-consistency:

```text
{Problem statement}

Approach this problem three different ways:
1. {Approach A}
2. {Approach B}
3. {Approach C}

Compare the results. Where do they agree? Where do they disagree?
What is your final answer based on the consensus?
```

**Filled-in example (self-reflection):**

```text
Write a Python function that validates email addresses using regex. Include edge cases.

Now review your function:
1. Test it mentally against these inputs: "user@example.com", "user@.com",
   "user+tag@example.co.uk", "@example.com", "user@example"
2. Identify any edge cases your regex misses
3. Provide a revised version that handles the issues you found
```

## Examples in Practice

### Example 1 — Content review

**Context:** You're drafting a product announcement and want to ensure quality before sending.

```text
Write a product launch announcement email for our new API analytics dashboard.
Target audience: CTOs at mid-size companies. Key features: real-time monitoring,
custom alerts, cost tracking.

Now review your draft. Check for:
1. Clarity of the value proposition — would a busy CTO understand the benefit in
   the first two sentences?
2. Appropriate tone — professional but not stiff
3. A clear call to action

Revise to address any issues you find.
```

**Why this works:** The critique dimensions are specific and relevant to the audience, so the review step produces targeted improvements rather than vague "this looks good" feedback.

### Example 2 — Analysis validation

**Context:** You want a recommendation but also want to understand its limitations.

```text
Recommend the top 3 programming languages for data science in 2025, with reasoning
for each choice.

Now critique your own recommendations:
- What biases might affect your ranking?
- What use cases would change the ranking?
- What did you leave out that a practitioner might consider important?

Provide a revised recommendation with appropriate caveats.
```

**Why this works:** The self-critique surfaces assumptions (e.g., bias toward popular languages, not considering niche domains) that the initial response glosses over.

### Example 3 — Multi-path reasoning

**Context:** You need to verify a calculation and want confidence in the result.

```text
Calculate the break-even point for this business:
- Fixed costs: $10,000/month
- Variable cost per unit: $15
- Selling price per unit: $45

Solve this three different ways:
1. The algebraic break-even formula
2. A contribution margin approach
3. By building a simple unit-by-unit model

Do all three approaches give the same answer? If not, explain the discrepancy.
```

**Why this works:** Mathematical consistency across three approaches validates correctness — if all three agree, confidence is high; if they disagree, the discrepancy reveals an error.

## Common Pitfalls

!!! warning "Shallow self-critique"
    **Problem:** The model says "my response looks good" or makes only cosmetic changes without meaningful critique.
    **Fix:** Give specific dimensions to evaluate: "Check for factual accuracy, completeness, logical consistency, and potential bias." The more specific your critique criteria, the more substantive the review.

!!! warning "Infinite revision loops"
    **Problem:** Each revision introduces new issues or changes things that were already correct, creating an endless cycle.
    **Fix:** Limit to one revision cycle, or specify exactly what to focus on: "Only fix factual errors; don't change the structure or tone." Constrained revision prevents scope creep.

!!! warning "False confidence from self-review"
    **Problem:** The model can confidently confirm its own errors — self-review is not the same as independent verification.
    **Fix:** For critical decisions, don't rely on self-review alone. Verify key facts, calculations, and claims independently. Self-review catches many errors but not all of them.

## Related Techniques

- [Chain-of-Thought](chain-of-thought.md) — explicit reasoning that pairs well with self-consistency
- [Multi-Turn Conversation](multi-turn-conversation.md) — use follow-up turns for human-guided reflection
- [Reframing Prompts](reframing-prompts.md) — restructure the problem to get a different angle
- [Prompt Engineering Overview](index.md)
- [Research use case](../../../use-cases/research.md) — self-consistency is especially valuable for research tasks where accuracy matters

## Further Reading

- Wang et al. 2022 — *Self-Consistency Improves Chain of Thought Reasoning in Language Models* — [arxiv.org/abs/2203.11171](https://arxiv.org/abs/2203.11171)
- Shinn et al. 2023 — *Reflexion: Language Agents with Verbal Reinforcement Learning* — [arxiv.org/abs/2303.11366](https://arxiv.org/abs/2303.11366)
- Madaan et al. 2023 — *Self-Refine: Iterative Refinement with Self-Feedback* — [arxiv.org/abs/2303.17651](https://arxiv.org/abs/2303.17651)
