#!/bin/bash

# Package Cristiano Story for Download
# Creates a compressed archive ready for local development

PROJECT_NAME="cristiano-story"
ARCHIVE_NAME="${PROJECT_NAME}-$(date +%Y%m%d_%H%M%S).tar.gz"

echo "📦 Packaging The Making of Greatness for download..."

# Create temporary directory for clean packaging
TEMP_DIR="/tmp/${PROJECT_NAME}_package"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Copy project files (excluding node_modules and build artifacts)
echo "📁 Copying project files..."
rsync -av \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='out' \
  --exclude='build' \
  --exclude='.vercel' \
  --exclude='*.log' \
  --exclude='.DS_Store' \
  ./ "$TEMP_DIR/"

# Create package info
cat > "$TEMP_DIR/PACKAGE_INFO.txt" << EOF
The Making of Greatness - Cristiano Ronaldo Digital Biography
============================================================

Package created: $(date)
Project version: 1.0.0

QUICK START:
1. Extract this archive
2. cd cristiano-story
3. npm install
4. npm run dev
5. Open http://localhost:3000

DEPLOYMENT OPTIONS:
- Local development: npm run dev
- Docker: docker build -t cristiano-story .
- Coolify: Follow instructions in DEPLOY.md
- Vercel: vercel --prod
- Netlify: npm run build && drag 'out' folder

REQUIREMENTS:
- Node.js 18+ 
- npm or yarn
- Modern browser for optimal experience

FEATURES:
✨ Luxury 2025 design trends
✨ Glassmorphism effects  
✨ Interactive story chapters
✨ Professional photography ready
✨ Mobile-first responsive design
✨ Performance optimized

Enjoy building the ultimate CR7 tribute! 🐐
EOF

# Create the archive
echo "🗜️  Creating compressed archive..."
cd /tmp
tar -czf "/root/myclaude/abdulla/${ARCHIVE_NAME}" "${PROJECT_NAME}_package/"

# Cleanup temp directory
rm -rf "$TEMP_DIR"

# Show package info
echo "✅ Package created successfully!"
echo ""
echo "📦 Package: ${ARCHIVE_NAME}"
echo "📍 Location: /root/myclaude/abdulla/${ARCHIVE_NAME}"
echo "💾 Size: $(du -h /root/myclaude/abdulla/${ARCHIVE_NAME} | cut -f1)"
echo ""
echo "🚀 Transfer to your PC with:"
echo "   scp user@your-vps:/root/myclaude/abdulla/${ARCHIVE_NAME} ."
echo ""
echo "📱 Or download via web if you have a file manager installed"