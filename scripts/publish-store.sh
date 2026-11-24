#!/bin/zsh
# Publish to the Raycast Store without files that only belong in this repo.
set -euo pipefail
root=${0:A:h:h}
stage=$(mktemp -d)/lan-scanner
mkdir -p "$stage"
rsync -a --exclude node_modules --exclude .git --exclude dist --exclude LICENSE --exclude DEVELOPMENT.md --exclude scripts "$root/" "$stage/"
cd "$stage"
npm ci --silent
npx ray publish "$@"
