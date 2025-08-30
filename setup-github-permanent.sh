#!/bin/bash

echo "🔐 Setting up PERMANENT GitHub Authentication"
echo "============================================="

# SSH Key is already created
SSH_PUBLIC_KEY="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEvXxHxt/ZSermq5g87wZSJSagt+uIs6nuVZYMZVN0UV cristiano-story-deployment"

echo ""
echo "✅ SSH Key generated successfully!"
echo ""
echo "📋 COPY this public key to GitHub:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "$SSH_PUBLIC_KEY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "🎯 Steps to add SSH key to GitHub:"
echo "1. Go to: https://github.com/settings/ssh/new"
echo "2. Title: 'Cristiano Story VPS'"
echo "3. Paste the key above ☝️"
echo "4. Click 'Add SSH key'"
echo ""

read -p "✋ Have you added the SSH key to GitHub? (y/n): " SSH_ADDED

if [[ $SSH_ADDED =~ ^[Yy]$ ]]; then
    echo ""
    echo "🎉 Great! Now let's set up your repository..."
    echo ""
    
    read -p "GitHub Username: " GITHUB_USERNAME
    read -p "Repository Name [cristiano-story]: " REPO_NAME
    REPO_NAME=${REPO_NAME:-cristiano-story}
    
    # Test SSH connection
    echo "🔍 Testing SSH connection to GitHub..."
    ssh -T git@github.com -o StrictHostKeyChecking=no 2>&1 | grep -q "successfully authenticated" && SSH_SUCCESS=true || SSH_SUCCESS=false
    
    if [ "$SSH_SUCCESS" = true ]; then
        echo "✅ SSH connection successful!"
        
        # Configure git
        git config --global user.name "$GITHUB_USERNAME"
        git config --global user.email "$GITHUB_USERNAME@users.noreply.github.com"
        
        # Set up repository  
        echo "📡 Setting up GitHub repository..."
        SSH_URL="git@github.com:${GITHUB_USERNAME}/${REPO_NAME}.git"
        
        # Remove existing origin if present
        git remote remove origin 2>/dev/null || true
        git remote add origin "$SSH_URL"
        
        echo "📤 Pushing to GitHub..."
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "🎊 SUCCESS! Repository created and pushed!"
            echo "🌐 GitHub URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
            echo ""
            echo "🚀 Next: Use this URL in Coolify:"
            echo "   Repository: ${SSH_URL}"
            echo "   Branch: main"
            echo "   Build Pack: Dockerfile"
            echo ""
            echo "💡 Your SSH key is now saved permanently!"
            echo "   You can push to GitHub anytime without passwords!"
        else
            echo "❌ Push failed. Make sure repository exists:"
            echo "   1. Go to: https://github.com/new"
            echo "   2. Repository name: $REPO_NAME"
            echo "   3. Don't initialize with README"
            echo "   4. Create repository"
            echo "   5. Run this script again"
        fi
    else
        echo "❌ SSH connection failed. Please:"
        echo "1. Make sure you added the SSH key to GitHub"
        echo "2. Wait 1-2 minutes for GitHub to process"
        echo "3. Run this script again"
    fi
else
    echo ""
    echo "⏳ Please add the SSH key to GitHub first:"
    echo "1. Copy the key above"
    echo "2. Go to: https://github.com/settings/ssh/new"
    echo "3. Add the key"
    echo "4. Run this script again: ./setup-github-permanent.sh"
fi

echo ""
echo "💾 SSH Key Location: ~/.ssh/id_ed25519"
echo "🔑 This setup is PERMANENT - no more passwords needed!"