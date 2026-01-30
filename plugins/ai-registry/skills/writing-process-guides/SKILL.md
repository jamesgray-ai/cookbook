---
name: writing-process-guides
description: Write Business Process Guide documentation that explains when, why, and how to execute a complete business process with its component workflows. Use when documenting a business process end-to-end, creating playbooks, or explaining how multiple workflows fit together. Triggers on "write process guide", "document this process", "create a playbook for", or "how do these workflows connect".
---

# Writing Business Process Guides

Write comprehensive Business Process Guide documentation and save directly to the Notion business process page body. Process guides explain the strategic context and rhythm of a complete business process, while individual workflow SOPs handle the tactical execution details.

## Process Guide vs Workflow SOP

| Aspect | Process Guide | Workflow SOP |
|--------|---------------|--------------|
| Level | Strategic | Tactical |
| Scope | Multiple workflows | Single workflow |
| Answers | When/Why/What order | How (step-by-step) |
| Audience | Decision-maker | Executor |
| Length | 1-2 pages | Detailed steps |

## Process

1. **Fetch the business process** from Notion to get context (Name, Domain, Description, linked Workflows)
2. **Fetch linked workflows** to understand the sequence and triggers
3. **Gather strategic context** from user if not already known (frequency, timing, decision points)
4. **Write Process Guide** using template
5. **Update the business process page** body in Notion with the guide content

## Template Overview

See `references/process-guide-template.md` for full template structure. Core sections:

| Section | Purpose |
|---------|---------|
| Purpose | Why this process exists and business impact |
| When to Execute | Triggers, frequency, timing |
| Process Overview | Visual flow of workflows |
| Workflow Sequence | Each workflow with trigger, duration, output |
| Decision Points | Key choices during the process |
| Success Criteria | How to know the process worked |
| Common Pitfalls | What typically goes wrong |

## Writing Guidelines

- Focus on the "why" and "when", not the "how" (that's in the SOPs)
- Include time estimates for the overall process
- Highlight decision points and branching logic
- Connect to business outcomes and metrics
- Keep it scannable - someone should grasp the process in 2 minutes

## Notion References

**Business Processes Database**: `collection://2d5edcfd-b924-80e3-90ad-000bf05e913b`

To update a business process page body:
```
Notion:notion-update-page with:
- page_id: [business process page ID]
- command: "replace_content"
- new_str: [Process Guide markdown content]
```

## Interaction Pattern

If user provides business process name/link:
1. Fetch business process to get context and linked workflows
2. Fetch each linked workflow for sequence/trigger details
3. Ask clarifying questions about timing and decision points
4. Draft Process Guide and present for review
5. Update Notion page after user approval

If workflows don't have SOPs yet:
1. Note which workflows need SOPs
2. Recommend writing SOPs first or in parallel
3. Process Guide can reference "see workflow SOP for details"
