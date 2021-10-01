#!/usr/bin/env sh
source ./scripts/shared.sh

npm run clean
echo "┏━━━ 📦 $PACKAGE_NAME: build ━━━━━━━━━━━━━━━━━━━"
tsc && rollup -c