#!/bin/bash

# Cristiano Story - Coolify Deployment Script
# This script creates a Coolify-compatible project structure

echo "🚀 Preparing Cristiano Story for Coolify deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: The Making of Greatness - CR7 Digital Biography"
else
    echo "✅ Git repository already exists"
fi

# Create Coolify configuration
echo "⚙️ Creating Coolify configuration..."

cat > coolify.json << EOF
{
  "name": "cristiano-story",
  "description": "The Making of Greatness - Cristiano Ronaldo Digital Biography",
  "type": "nextjs",
  "buildCommand": "npm ci && npm run build",
  "startCommand": "npm start",
  "port": 3000,
  "envs": {
    "NODE_ENV": "production",
    "NEXT_TELEMETRY_DISABLED": "1"
  },
  "domains": [],
  "volumes": [],
  "secrets": []
}
EOF

# Create deployment instructions
cat > DEPLOY.md << EOF
# Deployment Instructions for Coolify

## Method 1: Git Repository (Recommended)

1. **Push to Git Repository:**
   \`\`\`bash
   git remote add origin <your-git-repo-url>
   git push -u origin main
   \`\`\`

2. **In Coolify Dashboard:**
   - Go to Applications → New Application
   - Select "Git Repository" 
   - Enter your repository URL
   - Set Build Pack to "Dockerfile" or "Node.js"
   - Configure environment variables if needed
   - Click Deploy

## Method 2: Direct Docker Deployment

1. **Build and Deploy:**
   \`\`\`bash
   docker build -t cristiano-story .
   docker run -p 3000:3000 cristiano-story
   \`\`\`

## Method 3: Docker Compose

1. **Deploy with Compose:**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

## Environment Variables (Optional)

- \`NODE_ENV=production\`
- \`NEXT_TELEMETRY_DISABLED=1\`

## Port Configuration

- Application runs on port 3000
- Coolify will handle SSL and domain mapping

## Build Configuration

- **Build Command:** \`npm ci && npm run build\`
- **Start Command:** \`npm start\`
- **Build Pack:** Dockerfile or Node.js

## Domain Setup

After deployment, configure your domain in Coolify:
1. Go to your application settings
2. Add domain under "Domains" section  
3. Coolify will automatically generate SSL certificate
EOF

echo "✅ Coolify configuration created!"
echo "📄 Check DEPLOY.md for deployment instructions"

# Display next steps
echo ""
echo "🎯 Next Steps:"
echo "1. Push code to a Git repository (GitHub, GitLab, etc.)"
echo "2. In Coolify dashboard: New Application → Git Repository"
echo "3. Select your repository and deploy"
echo ""
echo "🌐 Your luxury CR7 website will be live at your configured domain!"

# Show current directory structure
echo ""
echo "📁 Project structure ready for Coolify:"
find . -name "*.json" -o -name "Dockerfile*" -o -name "docker-compose*" -o -name "*.md" | head -10