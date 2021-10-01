#!/usr/bin/env sh
source ./scripts/shared.sh

NC='\033[0m'
CYAN='\033[0;36m'

echo "┏━━━ 🕵️‍♀️ $PACKAGE_NAME: format:check ━━━━━━━"
echo
if prettier --ignore-path .gitignore --list-different "**/*.+(js|json|ts)" ; then
  echo "✅  No formatting issues found"
else
  echo
  echo "❌  Formatting issues found in the above files"
  echo "    To fix them, please run: ${CYAN}npm run format:write${NC}"
  echo 
fi
