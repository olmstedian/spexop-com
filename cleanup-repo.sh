#!/bin/bash

# Spexop Repository Cleanup Script
echo "🧹 Starting repository cleanup..."

# Remove redundant deployment scripts (keep deploy.sh and deploy-robust.sh)
echo "Removing redundant deployment scripts..."
rm -f deploy-enhanced.sh
rm -f manual-deploy.sh

# Remove unused nginx configs (keeping the main one)
echo "Removing unused nginx configs..."
rm -f nginx-arguseyes.conf
rm -f nginx-spexop-updated.conf

# Move test scripts to dev-tools folder
echo "Organizing test scripts..."
mkdir -p dev-tools
mv scripts/test-*.js dev-tools/ 2>/dev/null || true
mv scripts/get-refresh-token*.js dev-tools/ 2>/dev/null || true

# Remove sensitive files that shouldn't be in repo
echo "Removing sensitive files..."
rm -rf certs/
rm -f .env 2>/dev/null || true

# Clean build artifacts
echo "Cleaning build artifacts..."
rm -rf .next/
rm -rf out/
rm -rf node_modules/.cache/

# Remove OS generated files
echo "Removing OS generated files..."
find . -name ".DS_Store" -delete 2>/dev/null || true
find . -name "Thumbs.db" -delete 2>/dev/null || true

echo "✅ Cleanup complete!"
echo ""
echo "📊 Summary of changes:"
echo "- Removed redundant deployment scripts"
echo "- Removed unused nginx configs" 
echo "- Moved test scripts to dev-tools/"
echo "- Removed sensitive certificate files"
echo "- Cleaned build artifacts"
echo "- Removed OS generated files"
echo ""
echo "🔍 Review the changes and commit if satisfied."