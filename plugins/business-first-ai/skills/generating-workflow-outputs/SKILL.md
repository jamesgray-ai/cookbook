---
name: generating-workflow-outputs
description: >
  Generate a Baseline Workflow Prompt and Skill Specs from an AI Building Block
  Map. Use when the user has a completed AI Building Block Map and wants the final deliverables.
  This is Step 3 of 3 in the workflow deconstruction series.
---

# Workflow Output Generation

Take an AI Building Block Map and produce two deliverables: a Baseline Workflow Prompt and Skill Specs.

## Workflow

1. **Load AI Building Block Map** — Read the AI Building Block Map from `outputs/[workflow-name]-building-blocks.md`. If the user specifies a file path, use that. Otherwise, look for the most recent AI Building Block Map in `outputs/`.
2. **Confirm understanding** — Summarize the workflow name, step count, how many are AI-eligible, and the recommended implementation order. Ask the user to confirm before proceeding.
3. **Clarify if needed** — If anything in the AI Building Block Map is ambiguous, ask before generating. Maximum 1-2 clarifying questions.
4. **Check for executable instructions** — Before generating, check the Context Inventory for any artifacts typed as "Executable Instructions." These contain workflow logic that must be included in the Baseline Prompt — not referenced, but actually included. If executable instructions exist but their content is not in the AI Building Block Map, ask the user to paste or upload them. The Baseline Prompt cannot reference external systems for its core logic.
5. **Generate Baseline Workflow Prompt** — Produce a ready-to-use, self-contained prompt and write it to the output file. Include an Execution Context section advising where to run the prompt (normal chat vs. project) based on the AI Building Block Map's recommendation.
6. **Generate Skill Specs** — Produce skill specs and write them to the output file.
7. **Write SOP to Notion (if available)** — After both deliverables are generated, check if the Notion MCP server is accessible AND this workflow was registered in Step 1. If so, offer to write the workflow SOP to the Notion page using the `writing-workflow-sops` approach: pass the workflow name to locate the page, use the Baseline Prompt's procedure steps as the primary input, and write the formatted SOP to the page body. If Notion is not available or the workflow was not registered, skip this step.

## Outputs

Write two files:

### `outputs/[workflow-name]-prompt.md` — Baseline Workflow Prompt

Structure:
- **Title and Purpose** — Workflow name, description, outcome, when to use
- **Instructions** — Numbered steps, each labeled (AI) or (Human). AI steps get direct commands. Human steps describe what the human does and hands back. Include branching logic.
- **Input Requirements** — What the user provides when running the prompt, with format specs
- **Context Requirements** — Reference materials, files, or data to attach
- **Output Format** — What the prompt produces, with structure specs

The prompt must be: self-contained, specific, version-control ready, team-adoption ready.

**Self-contained means:** The prompt contains every instruction the model needs to execute the workflow. It never says "open this project" or "follow those instructions." If existing AI instructions drive a step, those instructions are written into the prompt.

**Execution Context** — Include a section advising where to run the prompt (normal chat vs. project), which files to attach or pre-load, and why. The prompt instructions are the same regardless of execution context — the project provides file staging convenience, not workflow logic.

### `outputs/[workflow-name]-skill-specs.md` — Skill Specs

For each recommended skill:
- **Skill Name** — 2-4 words, lowercase with hyphens
- **Purpose** — What it does, when to invoke it
- **Inputs** — What it needs, format requirements
- **Outputs** — What it produces, structure and format
- **Workflow Steps** — Specific steps it executes
- **Replaces Steps** — Which baseline prompt step numbers it replaces, how the invocation changes
- **Integration Points** — External tools, APIs, MCP servers
- **Priority** — High / Medium / Low
- **Quick Start Prompt** — One-sentence invocation

Present skills in priority order. If no steps qualify as good skill candidates, explain why.

## Guidelines

- If the user mentions Claude, note where Claude Code Skills are the appropriate implementation
- Use plain language; avoid jargon unless the user introduced it
- After writing both files, tell the user: "Outputs saved to `outputs/[name]-prompt.md` and `outputs/[name]-skill-specs.md`. Your workflow deconstruction is complete."
- Summarize the three files produced across all three steps so the user has a clear inventory of their deliverables
