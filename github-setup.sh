#!/bin/bash

# GitHub Setup Instructions for Cristiano Story
echo "🐙 GitHub Setup for The Making of Greatness"
echo "=============================================="

# Get user input for GitHub details
echo ""
echo "Please provide your GitHub details:"
echo ""

read -p "GitHub Username: " GITHUB_USERNAME
read -p "Repository Name [cristiano-story]: " REPO_NAME
REPO_NAME=${REPO_NAME:-cristiano-story}

echo ""
echo "Authentication method:"
echo "1. Personal Access Token (Recommended - More Secure)"
echo "2. Username/Password (Less Secure)"
echo ""

read -p "Choose method (1 or 2): " AUTH_METHOD

if [ "$AUTH_METHOD" = "1" ]; then
    echo ""
    echo "📋 Create a Personal Access Token:"
    echo "1. Go to: https://github.com/settings/tokens/new"
    echo "2. Name: 'Cristiano Story Deployment'"
    echo "3. Select scope: 'repo' (full control)"
    echo "4. Generate and copy the token"
    echo ""
    read -s -p "Paste your Personal Access Token: " GITHUB_TOKEN
    GITHUB_URL="https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
else
    read -s -p "GitHub Password: " GITHUB_PASSWORD
    GITHUB_URL="https://${GITHUB_USERNAME}:${GITHUB_PASSWORD}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
fi

echo ""
echo ""
echo "🚀 Setting up Git repository..."

# Configure git user (if not already set)
git config user.name "${GITHUB_USERNAME}"
git config user.email "${GITHUB_USERNAME}@users.noreply.github.com"

# Add remote origin
echo "📡 Adding GitHub remote..."
git remote add origin "${GITHUB_URL}"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your project is now on GitHub!"
    echo "🌐 Repository URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
    echo ""
    echo "🎯 Next steps for Coolify:"
    echo "1. Open your Coolify dashboard"
    echo "2. Applications → + New Application"
    echo "3. Select 'Git Repository'"
    echo "4. Repository URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
    echo "5. Branch: main"
    echo "6. Build Pack: Dockerfile"
    echo "7. Deploy!"
    echo ""
    echo "🏆 Your luxury CR7 website will be live soon!"
else
    echo ""
    echo "❌ Error pushing to GitHub. Please check:"
    echo "- Repository exists: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
    echo "- Credentials are correct"
    echo "- Repository is not initialized with README"
fi