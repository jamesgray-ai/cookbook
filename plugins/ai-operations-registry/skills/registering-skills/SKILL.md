---
name: registering-skills
description: Register or update Claude Skills in the Notion AI Assets database. Use this skill immediately after creating, packaging, or updating any Claude Skill to add or update it in the AI Assets tracking database. Triggers after skill creation, skill packaging, skill updates, or when user asks to register/add/track a skill in Notion.
---

# Registering Claude Skills

After creating, packaging, or updating a Claude Skill, register or update it in the AI Assets database.

## Database Reference

- **Data Source ID**: `2d5edcfd-b924-80cf-a0a0-000ba0164e40`
- **Data Source URL**: `collection://2d5edcfd-b924-80cf-a0a0-000ba0164e40`

## Schema

| Property | Type | Purpose |
|----------|------|---------|
| Name | title | Skill name from frontmatter |
| Description | text | Skill description from frontmatter (includes trigger phrases) |
| Asset Type | select | Always "Skill" for skills |
| Platform | select | Always "Claude" for Claude skills |
| Quick Start Prompt | text | Copy-paste prompt that demonstrates the skill |
| GitHub | url | Repository URL if applicable |

## Process

For **each skill** being registered:

### Step 1: Extract Skill Metadata

Read the SKILL.md frontmatter to get:
- `name`: The skill name
- `description`: The skill description

### Step 2: Generate Quick Start Prompt

Create a single, copy-paste-ready prompt that demonstrates the skill's primary use case.

**Guidelines for Quick Start Prompts:**
- One sentence that triggers the skill's main workflow
- Specific enough to be immediately useful
- Generic enough to work across different contexts
- Should produce a complete result, not just start a conversation

**Examples:**

| Skill | Quick Start Prompt |
|-------|-------------------|
| reviewing-student-goals | "Navigate to my Maven course Reflect: Goals page and extract all student learning goals. Update each student's record in Notion and give me a cohort theme analysis." |
| researching-student-linkedin | "Research all students in Cohort 14 who have LinkedIn profiles and add summaries to their Notion pages." |
| writing-linkedin-posts | "Write a LinkedIn post about [topic] using my brand voice." |
| importing-maven-students | "Import students from the attached Maven CSV into my Notion Students database for Cohort 14." |

**If unsure**: Ask James for the Quick Start Prompt rather than guessing.

### Step 3: Search for Existing Entry

Search the data source for the **exact skill name**:

```json
{
  "query": "<skill-name>",
  "data_source_url": "collection://2d5edcfd-b924-80cf-a0a0-000ba0164e40"
}
```

**Critical**: Check search results carefully. A match exists only if a result has the **exact same title** as the skill name. Partial matches or similar names are NOT duplicates.

### Step 4: Create or Update

**If exact match found** → Update the existing page:

```json
{
  "data": {
    "page_id": "<page-id-from-search>",
    "command": "update_properties",
    "properties": {
      "Description": "<description-from-frontmatter>",
      "Quick Start Prompt": "<generated-quick-start-prompt>"
    }
  }
}
```

**If no exact match** → Create new entry:

```json
{
  "parent": {"data_source_id": "2d5edcfd-b924-80cf-a0a0-000ba0164e40"},
  "pages": [{
    "properties": {
      "Name": "<skill-name>",
      "Description": "<description-from-frontmatter>",
      "Asset Type": "Skill",
      "Platform": "Claude",
      "Quick Start Prompt": "<generated-quick-start-prompt>"
    }
  }]
}
```

## Batch Registration

When registering multiple skills:
1. Search for **each skill individually** before any creates/updates
2. Build two lists: skills to update (with page IDs) and skills to create
3. For each skill, generate or request a Quick Start Prompt
4. Perform updates first, then batch create new entries
5. Report results: X created, Y updated

## Notes

- Always confirm registration with the user after modifying Notion
- If the skill has a GitHub repository, include the URL in the **GitHub** property
- Never create entries without first checking for duplicates
- If you can't determine an appropriate Quick Start Prompt, ask James for one
