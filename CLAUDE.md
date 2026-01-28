# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Repository Overview

Hands-On AI (handsonai.info) — the consolidated site for James Gray's AI courses, setup guides, reference content, and practical AI resources. Built with MkDocs Material and deployed to GitHub Pages.

## Repository Structure

- `docs/platforms/` - Platform-specific content (Claude, OpenAI, Gemini, M365 Copilot)
- `docs/fundamentals/` - Cross-platform concepts, builder setup, patterns
- `docs/courses/` - Structured course content (builders, leaders)
- `docs/questions/` - AEO-optimized Q&A content
- `docs/how-to/` - Problem-focused guides
- `docs/troubleshooting/` - Common issues and solutions
- `docs/overrides/main.html` - FAQPage JSON-LD schema injection for AEO
- `docs/_templates/` - Content templates for contributors
- `.claude/agents/` - Claude Code subagent definitions
- `.claude/skills/` - Claude Code skill definitions
- `scripts/` - Wrapper scripts for scheduled subagents

## Content Guidelines

- Write for students who may be new to developer tools
- Include screenshots where helpful
- Keep setup guides tool-focused (one tool per doc)
- Link to official documentation rather than duplicating it
- When adding new docs to `docs/`, also update the `nav:` section in `mkdocs.yml`
- Questions pages must include `question` and `short_answer` frontmatter for AEO schema

## Scheduling Subagents

When setting up scheduled tasks for subagents:
- Use `claude -p "prompt" --dangerously-skip-permissions` to allow headless tool use (required for agents that write files)
- Use the full path to claude binary (e.g., `~/.local/bin/claude`) since launchd/Task Scheduler have minimal PATH
- Always include logging to capture stdout/stderr for troubleshooting
- Store logs in the project's `logs/scheduled/` folder so they're easy to find
- Include timestamps in log filenames for easy debugging
