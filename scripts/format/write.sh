#!/usr/bin/env sh
source ./scripts/shared.sh

echo "┏━━━ 🕵️‍♀️ $PACKAGE_NAME: format:write ━━━━━━━"
sort-package-json && prettier --ignore-path .gitignore --write "**/*.+(js|json|ts)"
