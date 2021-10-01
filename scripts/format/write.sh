#!/usr/bin/env sh
source ./scripts/shared.sh

echo "┏━━━ 🕵️‍♀️ $PACKAGE_NAME: format:write ━━━━━━━"
prettier --ignore-path .gitignore --write "**/*.+(js|json|ts)" 
