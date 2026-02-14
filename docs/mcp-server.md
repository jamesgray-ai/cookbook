---
title: MCP Server
description: Connect to the Hands-on AI Cookbook from Claude, ChatGPT, Gemini, Cursor, and other MCP-compatible tools
---

# MCP Server

The Hands-on AI Cookbook is available as an MCP (Model Context Protocol) server, so you can get cookbook-informed answers directly in your AI tools.

## What You Get

The MCP server gives your AI assistant access to:

- **Search** across all cookbook pages by keyword
- **Read** the full content of any page
- **Browse** sections like Building Blocks, Framework, Use Cases, and more
- **Deep dive** into building blocks or framework steps with all sub-pages
- **Q&A lookup** with quick answers from the cookbook's question pages
- **Setup guides** for every tool in the Builder Stack

## Connect from Claude Code

Run this command in your terminal:

```bash
claude mcp add handsonai-cookbook --transport http https://mcp.handsonai.info/mcp
```

That's it. Claude Code will now have access to all cookbook tools.

## Connect from Claude Desktop

Add this to your Claude Desktop MCP config file:

=== "macOS"

    Edit `~/Library/Application Support/Claude/claude_desktop_config.json`:

=== "Windows"

    Edit `%APPDATA%\Claude\claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "handsonai-cookbook": {
      "type": "streamable-http",
      "url": "https://mcp.handsonai.info/mcp"
    }
  }
}
```

Restart Claude Desktop after saving.

## Connect from Other MCP Clients

Any MCP client that supports Streamable HTTP transport can connect:

- **URL:** `https://mcp.handsonai.info/mcp`
- **Transport:** Streamable HTTP (POST with JSON-RPC 2.0)
- **Authentication:** None required (public)

## Available Tools

| Tool | Description |
|------|-------------|
| `search_cookbook` | Search pages by keyword, optionally filtered to a section |
| `get_page` | Get the full content of a specific page by path |
| `list_section` | List all pages in a section (building-blocks, framework, use-cases, etc.) |
| `get_building_block` | Get a building block and all its sub-pages (prompts, agents, mcp, etc.) |
| `get_framework_step` | Get a framework step and all its sub-pages (discover, deconstruct, build) |
| `list_questions` | List all Q&A pages with question text and short answers |
| `get_setup_guide` | Get a Builder Stack setup guide (terminal, editor, git, claude-code, etc.) |

## Example Prompts

Once connected, try asking your AI assistant:

- "What are the agentic building blocks?"
- "How do I set up Claude Code?"
- "Search the cookbook for prompt engineering techniques"
- "What's the Business-First AI Framework?"
- "Show me the automation use case"

The AI will use the cookbook MCP tools to pull relevant content and answer with cookbook knowledge.
