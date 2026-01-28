#!/bin/bash
# Human approval gate for agent workflows

AGENT_NAME="${1:-agent}"

echo ""
echo "════════════════════════════════════════════════════"
echo "  ✅ ${AGENT_NAME} completed"
echo "════════════════════════════════════════════════════"
echo ""
echo "Review the output above before continuing."
echo ""

read -p "Approve and continue? [y/n]: " INPUT

if [ "$INPUT" != "y" ]; then
    echo "Workflow paused by user" >&2
    exit 2
fi

exit 0
