---
title: Role Prompting
description: Assign the model a specific identity, expertise, or perspective to shape its vocabulary, reasoning, and level of detail.
---

# Role Prompting

> **Platforms:** `claude` `openai` `gemini` `m365-copilot`

## What It Is

Role prompting means assigning the model a specific identity, expertise, or perspective to shape its responses. You tell the model who it should "be" — a senior data analyst, a skeptical CFO, a kindergarten teacher — and it adjusts its vocabulary, reasoning approach, and level of detail accordingly. This technique also encompasses **perspective shifts**, where you ask the model to analyze a topic from multiple viewpoints in a single prompt.

## Why It Works

Role assignments activate relevant knowledge clusters in the model's training data. When you say "You are a senior tax attorney," the model (a large language model, or LLM) draws more heavily on legal reasoning patterns and tax-specific knowledge. However, research is mixed — Kong et al. (2023) showed role-play improved ChatGPT's accuracy on math reasoning from 53.5% to 63.8%, but Zheng et al. (2023) found persona prompts don't reliably improve performance across all tasks. The technique works best when the role provides genuine expertise framing, not just a label.

## When to Use It

- Tasks requiring domain-specific knowledge or vocabulary
- When you need output tailored to a specific audience
- Exploring a problem from multiple perspectives (perspective shifts)
- When the default "helpful assistant" tone isn't appropriate
- Advisory or consulting scenarios where depth and skepticism matter

## The Pattern

```text
You are a {role/title} with {relevant experience}. Your audience is {who will read this}.

{Task description}
```

Multi-perspective variation:

```text
Analyze {topic/decision} from the following perspectives:
1. {Perspective 1}: focus on {their concerns}
2. {Perspective 2}: focus on {their concerns}
3. {Perspective 3}: focus on {their concerns}

For each perspective, identify: key concerns, recommended action, and potential blind spots.
```

**Filled-in example:**

```text
You are a senior DevOps engineer with 12 years of experience managing cloud infrastructure
at scale. Your audience is a startup CTO evaluating hosting options.

Compare AWS, GCP, and Azure for a startup expecting to scale from 1,000 to 100,000 users
in the next 18 months. Focus on cost efficiency, developer experience, and scaling pain points.
```

## Examples in Practice

### Example 1 — Expert advice

**Context:** A team is debating an architecture change, and you want a seasoned perspective.

```text
You are a senior backend engineer with 15 years of experience in distributed systems.
A junior developer on your team is proposing to move from a monolithic architecture to
microservices for an app with 500 daily active users. Provide your honest assessment,
including risks they might not be considering.
```

**Why this works:** The seniority and domain expertise shape the depth and skepticism of the response — the model will raise concerns a junior engineer might not think of.

### Example 2 — Audience-appropriate explanation

**Context:** A business owner needs accounting concepts explained without jargon.

```text
You are a financial advisor explaining to a small business owner with no accounting
background. Explain the difference between cash-basis and accrual accounting. Use
everyday analogies, avoid jargon, and explain why they should care.
```

**Why this works:** The role + audience pairing determines both content depth and register — the model will simplify concepts and use relatable comparisons.

### Example 3 — Perspective shift

**Context:** A company is weighing a major policy change and needs to anticipate different stakeholder reactions.

```text
A mid-size company is considering implementing a 4-day work week. Analyze this from
three perspectives:
1. The CEO concerned about productivity and client expectations
2. An HR director focused on retention and employee wellbeing
3. A frontline manager worried about scheduling and workload

For each, identify their top concern, likely position, and what data they'd want to see.
```

**Why this works:** Each perspective surfaces different priorities and blind spots, giving a more complete picture than any single viewpoint.

## Common Pitfalls

!!! warning "Superficial roles"
    **Problem:** "You are an expert" adds nothing meaningful to the prompt.
    **Fix:** Specify the *type* of expertise, years of experience, and relevant context. "You are a pediatric nurse with 10 years of emergency room experience" is far more effective than "You are a medical expert."

!!! warning "Role-task mismatch"
    **Problem:** Asking a "marketing expert" to debug code — the role doesn't bring relevant expertise to the task.
    **Fix:** Match the role to the task. The role should bring knowledge and judgment that genuinely helps with what you're asking.

!!! warning "Overreliance on roles for accuracy"
    **Problem:** Assuming that assigning a role (e.g., "You are a fact-checker") makes the model's factual claims more reliable.
    **Fix:** Roles shape framing, vocabulary, and depth — not factual accuracy. Always verify critical facts independently, regardless of the assigned role.

## Related Techniques

- [Contextual Prompting](contextual-prompting.md) — provide background information alongside your prompt
- [Emotional Prompting](emotional-prompting.md) — add stakes and motivation to encourage thoroughness
- [Reframing Prompts](reframing-prompts.md) — restructure a problem to get a better response
- [Prompt Engineering Overview](index.md)
- [Ideation and Strategy use case](../../../use-cases/ideation-and-strategy/) — role prompting is especially effective for strategic analysis

## Further Reading

- Kong et al. 2023 — *Better Zero-Shot Reasoning with Role-Play Prompting* — [arxiv.org/abs/2308.07702](https://arxiv.org/abs/2308.07702)
- Zheng et al. 2023 — *When "A Helpful Assistant" Is Not Really Helpful* — [arxiv.org/abs/2311.10054](https://arxiv.org/abs/2311.10054)
