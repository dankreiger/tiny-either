#!/usr/bin/env sh
source ./scripts/shared.sh

echo "┏━━━ 📚 $PACKAGE_NAME: docs ━━━━━━━"
rimraf docs && docs-ts