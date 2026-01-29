---
name: writing-workflow-sops
description: Write Standard Operating Procedure documentation for workflows and save to Notion workflow page bodies. Use when the user asks to write an SOP, document a workflow, create procedure documentation, add operating instructions to a workflow, or wants to capture how a workflow is executed. Adapts template for Manual, Augmented, and Automated workflow types.
---

# Writing Workflow SOPs

Write comprehensive SOP documentation for workflows and save directly to the Notion workflow page body.

## Process

1. **Fetch the workflow** from Notion to get context (Name, Description, Type, Trigger, Apps, Assets Used)
2. **Gather procedure details** from user if not already known
3. **Write SOP** using template adapted for workflow Type
4. **Update the workflow page** body in Notion with the SOP content

## Template Overview

See `references/sop-template.md` for full template structure. Core sections:

| Section | Purpose |
|---------|---------|
| Overview | 1-2 sentence summary |
| Prerequisites | Access, data, tools needed |
| Trigger | When/how workflow starts |
| Procedure | Step-by-step instructions |
| Outputs | Deliverables with destinations |
| Quality Checks | Success verification |
| Troubleshooting | Common problems + fixes |
| Automation Notes | For Augmented/Automated only |

## Type Adaptations

**Manual**: Detailed human steps, time estimates, exact UI paths
**Augmented**: Mark steps as (AI) or (Human), include handoff points
**Automated**: Focus on monitoring, intervention points, error handling

## Writing Guidelines

- Start procedure steps with action verbs
- One action per step (no "and then")
- Include decision points as explicit branches
- Add tips only for non-obvious gotchas
- Keep troubleshooting to common issues only

## Notion References

**Workflows Database**: `collection://26fedcfd-b924-80c2-9a3a-000bfafb9fe9`

To update a workflow page body:
```
Notion:notion-update-page with:
- page_id: [workflow page ID]
- command: "replace_content"
- new_str: [SOP markdown content]
```

## Interaction Pattern

If user provides workflow name/link:
1. Fetch workflow to get context
2. Ask clarifying questions about procedure details
3. Draft SOP and present for review
4. Update Notion page after user approval

If user describes a new workflow:
1. Confirm workflow exists in database (or create it)
2. Gather procedure details
3. Draft and save SOP
