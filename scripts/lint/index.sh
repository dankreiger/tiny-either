#!/usr/bin/env sh
source ./scripts/shared.sh

echo "┏━━━ 🕵️‍♀️ $PACKAGE_NAME lint ━━━━━━━"
eslint src --quiet --ext .ts 