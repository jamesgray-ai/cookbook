# SOP Template Reference

## Full Template Structure

```markdown
## Overview
[1-2 sentences: What this workflow accomplishes and why it matters]

## Prerequisites
- [ ] [Access/permissions required]
- [ ] [Data or inputs that must exist]
- [ ] [Tools/apps that must be connected]

## Trigger
**When:** [Schedule, event, or manual request]
**Frequency:** [Daily / Weekly / On-demand / Event-driven]

---

## Procedure

### Step 1: [Action verb + what]
[Specific instructions with exact locations, button names, or commands]

> 💡 **Tip:** [Optional efficiency hack or gotcha]

### Step 2: [Action verb + what]
[Continue with specific instructions]

**Decision Point:** [If X, do Y. If Z, do W.]

### Step 3: [Action verb + what]
[Continue...]

---

## Outputs
| Output | Destination | Format |
|--------|-------------|--------|
| [What gets produced] | [Where it goes] | [Type] |

## Quality Checks
- [ ] [How to verify success]
- [ ] [What good output looks like]

## When Things Go Wrong
| Problem | Solution |
|---------|----------|
| [Common failure] | [Resolution] |

---

## Automation Notes
**Skill/Agent:** [Link to Claude Skill if applicable]
**Human Checkpoints:** [Where human review required]
**Logs/Monitoring:** [Where to check execution]
```

## Type-Specific Adaptations

### Manual Workflows
- Emphasize detailed step-by-step instructions
- Include time estimates per step
- Add screenshots or exact UI paths when helpful
- Focus on "what you do"

### Augmented Workflows
Mark human vs AI steps clearly:
```markdown
### Step 2: Generate draft (AI)
Claude analyzes [input] and produces [output].

### Step 3: Review and refine (Human)
Review the draft for [criteria]. Edit as needed before [next action].
```

### Automated Workflows
- Focus on monitoring and intervention points
- Procedure describes "what the system does" not "what you do"
- Emphasize error handling and recovery
- Include log locations and success indicators

## Section Guidelines

### Overview
- 1-2 sentences maximum
- Answer: What does this do? Why does it matter?
- Avoid technical implementation details

### Prerequisites
- List only items that MUST exist before starting
- Include access, data inputs, and tool connections
- Keep to 3-5 items max

### Procedure Steps
- Start each step with action verb
- One action per step (avoid compound steps with "and then")
- Include decision points as explicit branches
- Add tips only for non-obvious gotchas

### Outputs Table
- List every tangible deliverable
- Specific destination (database name, folder path, inbox)
- Include format (PDF, Notion page, email draft)

### Quality Checks
- Measurable verification criteria
- "What good looks like" examples
- 2-4 checks maximum

### Troubleshooting
- Only COMMON failures (80/20 rule)
- Actionable solutions, not vague guidance
- 2-4 problems maximum
