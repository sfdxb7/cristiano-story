# Deployment Instructions for Coolify

## Method 1: Git Repository (Recommended)

1. **Push to Git Repository:**
   ```bash
   git remote add origin <your-git-repo-url>
   git push -u origin main
   ```

2. **In Coolify Dashboard:**
   - Go to Applications → New Application
   - Select "Git Repository" 
   - Enter your repository URL
   - Set Build Pack to "Dockerfile" or "Node.js"
   - Configure environment variables if needed
   - Click Deploy

## Method 2: Direct Docker Deployment

1. **Build and Deploy:**
   ```bash
   docker build -t cristiano-story .
   docker run -p 3000:3000 cristiano-story
   ```

## Method 3: Docker Compose

1. **Deploy with Compose:**
   ```bash
   docker-compose up -d
   ```

## Environment Variables (Optional)

- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

## Port Configuration

- Application runs on port 3000
- Coolify will handle SSL and domain mapping

## Build Configuration

- **Build Command:** `npm ci && npm run build`
- **Start Command:** `npm start`
- **Build Pack:** Dockerfile or Node.js

## Domain Setup

After deployment, configure your domain in Coolify:
1. Go to your application settings
2. Add domain under "Domains" section  
3. Coolify will automatically generate SSL certificate
