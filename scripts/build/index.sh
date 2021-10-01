#!/usr/bin/env bash
npm run clean
echo "┏━━━ 📦 Build $(pwd) ━━━━━━━━━━━━━━━━━━━"
tsc && rollup -c