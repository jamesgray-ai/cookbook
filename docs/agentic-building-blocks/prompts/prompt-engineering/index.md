---
title: Prompt Engineering
description: A practical guide to 14 prompt engineering techniques — patterns you can apply immediately to get better results from any AI platform
---

# Prompt Engineering

Prompt engineering is the practice of structuring your input to an AI model so that it produces the output you actually need. It is not about memorizing magic phrases — it is about understanding how models interpret instructions and providing the right context, structure, and constraints to guide their responses.

These techniques work across all major AI platforms (Claude, ChatGPT, Gemini, Copilot) because they address how large language models process language, not platform-specific features.

## Core Principles

Before diving into specific techniques, these principles apply to all prompt engineering:

1. **Be specific** — Vague prompts produce vague outputs. Say exactly what you want.
2. **Provide context** — The model only knows what you tell it. Include relevant background.
3. **Show, don't just tell** — Examples are more powerful than descriptions of what you want.
4. **Structure your output** — Tell the model what format you need (bullets, table, JSON, etc.).
5. **Constrain the scope** — Boundaries improve quality. Set word limits, define the audience, specify what to exclude.
6. **Iterate** — Your first prompt is a draft. Refine based on what comes back.
7. **Break complex tasks down** — One clear instruction per prompt beats a wall of requirements.
8. **Match the technique to the task** — Not every technique suits every situation. Choose based on what you need.

## Technique Catalog

### Foundational Techniques

These are the building blocks — techniques you will use daily.

| Technique | What It Does | Best For |
|-----------|-------------|----------|
| [Zero-Shot Prompting](zero-shot-prompting.md) | Ask the model to perform a task with no examples | Simple, well-defined tasks |
| [Few-Shot Learning](few-shot-learning.md) | Provide examples so the model learns the pattern | Custom formats, tone matching, classification |
| [Chain-of-Thought](chain-of-thought.md) | Ask the model to reason step by step | Math, logic, analysis, complex decisions |
| [Direct Instruction](direct-instruction.md) | Give explicit, imperative commands | Any task where clarity matters |

### Shaping Techniques

These techniques control *how* the model approaches your task.

| Technique | What It Does | Best For |
|-----------|-------------|----------|
| [Contextual Prompting](contextual-prompting.md) | Embed background information in the prompt | Domain-specific tasks, personalized output |
| [Role Prompting](role-prompting.md) | Assign the model a persona or expertise | Specialized knowledge, audience-appropriate tone |
| [Output Formatting](output-formatting.md) | Specify the structure and format of the response | Reports, data extraction, structured content |
| [Multi-Turn Conversation](multi-turn-conversation.md) | Build on previous exchanges to refine results | Exploration, iterative refinement, complex projects |

### Quality Techniques

These techniques improve the reliability and depth of outputs.

| Technique | What It Does | Best For |
|-----------|-------------|----------|
| [Self-Consistency and Reflection](self-consistency-and-reflection.md) | Ask the model to check and critique its own work | High-stakes decisions, error reduction |
| [Emotional Prompting](emotional-prompting.md) | Add motivational or stakes-based language | Tasks where engagement and effort matter |
| [Reframing Prompts](reframing-prompts.md) | Rephrase a question to approach it differently | When initial prompts give poor results |

### Specialized Techniques

These techniques solve specific types of problems.

| Technique | What It Does | Best For |
|-----------|-------------|----------|
| [Style Unbundling](style-unbundling.md) | Decompose a writing style into separate attributes | Matching a specific voice or tone |
| [Summarization and Distillation](summarization-and-distillation.md) | Compress or restructure information | Long documents, research synthesis |
| [Real-World Constraints](real-world-constraints.md) | Embed business rules and practical limits into prompts | Feasible plans, budget-aware output |

## Where to Start

**New to prompting?** Start with [Zero-Shot Prompting](zero-shot-prompting.md) and [Direct Instruction](direct-instruction.md) — these two techniques cover most everyday tasks.

**Want better results?** Add [Few-Shot Learning](few-shot-learning.md) to teach the model your preferred format, then use [Chain-of-Thought](chain-of-thought.md) for anything requiring reasoning.

**Working on something complex?** Combine techniques — for example, use [Role Prompting](role-prompting.md) + [Contextual Prompting](contextual-prompting.md) + [Output Formatting](output-formatting.md) to get expert-level, structured responses grounded in your specific domain.

## Related

- [Prompts](../index.md) — The Prompts building block overview
- [Resources](resources.md) — Academic papers and platform documentation
- [Patterns](../../../patterns/index.md) — Reusable AI patterns and best practices
- [Use Cases](../../../use-cases/index.md) — See these techniques applied to real tasks
