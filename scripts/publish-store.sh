#!/bin/zsh
# Publish to the Raycast Store without files that only belong in this repo.
set -euo pipefail
root=${0:A:h:h}
stage=$(mktemp -d)/lan-scanner
mkdir -p "$stage"
rsync -a --exclude node_modules --exclude .git --exclude dist --exclude LICENSE --exclude DEVELOPMENT.md --exclude scripts "$root/" "$stage/"
cd "$stage"
npm ci --silent
# ray publish expects a git repo; reuse this repo's identity (noreply address)
git init -q
git config user.name "$(git -C "$root" config user.name)"
git config user.email "$(git -C "$root" config user.email)"
git add -A && git commit -qm "Store build"
npx ray publish "$@"
