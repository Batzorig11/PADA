---
description: View the most recent screenshot
allowed-tools: Bash(ls:*), Read
---

The latest screenshot file path:

!`ls -t ~/Pictures/Screenshots/*.png 2>/dev/null | head -1`

Read that screenshot file and describe what you see. If the user added instructions after the command ($ARGUMENTS), follow them in the context of the screenshot.
