#!/bin/bash
set -e

echo "==> Building..."
npm run build

echo "==> Deploying dist/ to gh-pages..."

TMP="$(pwd)/../gh-pages-deploy-tmp"
rm -rf "$TMP"
git worktree add "$TMP" gh-pages

# gh-pages worktree 只有构建产物，清掉旧的再复制新的
rm -rf "$TMP"/*
cp -r dist/* "$TMP/"

cd "$TMP"
git add -A
if git diff --cached --quiet; then
  echo "Nothing changed, skip."
else
  git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')"
  git push origin gh-pages
  echo "==> Done! https://aisams.github.io/HiDipa/"
fi

cd "$OLDPWD"
git worktree remove "$TMP" --force
