---
name: analyzing-workflows
description: >
  Classify workflow steps on the autonomy spectrum, map them to AI building blocks, and produce
  an AI Building Block Map. Use when the user has a Workflow Definition and wants to analyze
  it for AI operationalization. This is Step 2 of 3 in the workflow deconstruction series.
---

# Workflow Analysis

Take a Workflow Definition, classify each step on the autonomy spectrum, map to AI building blocks, and produce a complete AI Building Block Map.

## Workflow

1. **Load Workflow Definition** — Read the Workflow Definition file from `outputs/[workflow-name]-definition.md`. If the user specifies a file path, use that. Otherwise, look for the most recent Workflow Definition in `outputs/`.
2. **Confirm understanding** — Summarize the workflow name, step count, and outcome. Ask the user to confirm before proceeding.
3. **Classify each step** — For every refined step, determine:
   - **Autonomy level**: Human / AI-Deterministic / AI-Semi-Autonomous / AI-Autonomous
   - **AI building block(s)**: Prompt, Context, Skill, Agent, MCP, Project
   - **Tools and connectors**: External tools, APIs, integrations needed
   - **Human-in-the-loop gates**: Where human review is recommended
4. **Present mapping** — Show the classification as a clear table. Walk through reasoning for non-obvious classifications. Ask the user if they want to adjust anything.
5. **Generate AI Building Block Map** — After confirmation, produce the complete AI Building Block Map and write it to the output file.

## Output

Write the AI Building Block Map to `outputs/[workflow-name]-building-blocks.md` using the same workflow name from the Workflow Definition.

The AI Building Block Map must include:

### Scenario Summary
- Workflow name, description, outcome, trigger, type, business objective, current owner(s)

### Step-by-Step Decomposition Table

| # | Step | Action | Type | Decision Points | Failure Mode | Data In | Data Out | Context Needed | AI Building Block(s) |
|---|------|--------|------|----------------|-------------|---------|----------|----------------|---------------------|

### Autonomy Spectrum Summary
- Human steps, deterministic AI steps, semi-autonomous AI steps (with review gates), fully autonomous AI steps

### Step Sequence and Dependencies
- Sequential steps, parallel steps, critical path, dependency map

### Prerequisites
- What must be in place before the workflow can run
- External dependencies (accounts, access, data sources)

### Context Inventory

| Artifact | Type | Description | Used By Steps | Status | Format | Key Contents |
|----------|------|-------------|---------------|--------|--------|--------------|

### Tools and Connectors Required

### Recommended Implementation Order
1. **Quick wins** — Deterministic steps automatable with Prompt or Context alone
2. **High-value semi-autonomous steps** — AI does most work, human review gate
3. **Complex agent steps** — Fully autonomous, requiring Agents/MCP/multi-tool orchestration

### Execution Context
Recommend where the Baseline Workflow Prompt should be run (normal chat vs. project workspace). Normal chat for infrequent workflows with few context files. Project workspace for frequent workflows with multiple context files or where conversation memory is valuable. State the recommendation, reasoning, and specific context files to attach or pre-load. The Baseline Workflow Prompt is always self-contained — the project provides file staging, not workflow logic.

## Guidelines

- If the Workflow Definition is missing information needed for classification, ask the user to clarify
- If the user mentions they're using Claude, note where Skills are the appropriate building block
- Explain reasoning for non-obvious classifications
- After writing the AI Building Block Map, tell the user: "AI Building Block Map saved to `outputs/[name]-building-blocks.md`. Ready for Step 3 — Prompt & Skill Specs."
