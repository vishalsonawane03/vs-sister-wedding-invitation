# 🚀 Git Deployment Guide for Wedding Invitation Website

## 📋 Step-by-Step Instructions

### Step 1: Initialize Git Repository
```bash
git init
```

### Step 2: Add All Files to Git
```bash
git add .
```

### Step 3: Create Initial Commit
```bash
git commit -m "Initial commit: Beautiful wedding invitation website for Gaytri & Jignesh"
```

### Step 4: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New Repository" (green button)
3. Repository name: `sister-wedding-invitation` or `gaytri-jignesh-wedding`
4. Description: "Beautiful wedding invitation website for Gaytri & Jignesh - November 27, 2025"
5. Set to **Public** (so guests can access it)
6. **DO NOT** initialize with README (you already have files)
7. Click "Create Repository"

### Step 5: Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
```
*Replace YOUR_USERNAME and REPOSITORY_NAME with your actual GitHub username and repository name*

### Step 6: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## 🌐 Deploy to GitHub Pages (Free Hosting)

### Step 7: Build the Website
```bash
npm run build
```

### Step 8: Install GitHub Pages Deployment Tool
```bash
npm install --save-dev gh-pages
```

### Step 9: Add Deployment Script to package.json
Add this to your `package.json` in the "scripts" section:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

### Step 10: Configure Vite for GitHub Pages
Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REPOSITORY_NAME/',  // Replace with your repo name
})
```

### Step 11: Deploy to GitHub Pages
```bash
npm run build
npm run deploy
```

### Step 12: Enable GitHub Pages
1. Go to your GitHub repository
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Source: Select "Deploy from a branch"
5. Branch: Select "gh-pages"
6. Click "Save"

## 🎉 Your Website Will Be Live At:
```
https://YOUR_USERNAME.github.io/REPOSITORY_NAME/
```

## 📝 Quick Command Summary

```bash
# Initialize and push to GitHub
git init
git add .
git commit -m "Initial commit: Wedding invitation website"
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 🔄 Future Updates

When you make changes to your website:
```bash
git add .
git commit -m "Update: Description of changes"
git push origin main
npm run build
npm run deploy
```

## 💡 Pro Tips

1. **Custom Domain:** You can use a custom domain like `gaytri-jignesh-wedding.com`
2. **Private Repository:** If you want privacy, use a private repo and deploy elsewhere
3. **Image Optimization:** Compress images before pushing to reduce load times
4. **Mobile Testing:** Test the live site on mobile devices
5. **Share Link:** Once live, share the GitHub Pages URL with family and friends

## 🛠️ Troubleshooting

**If images don't load on GitHub Pages:**
- Move images to `public/images/` folder instead of `src/assets/images/`
- Update image paths to `/images/couple/background_img.jpg`

**If deployment fails:**
- Check that all files are committed: `git status`
- Ensure build succeeds: `npm run build`
- Check GitHub Pages settings in repository

Your beautiful wedding invitation website is ready to be shared with the world! 🎊
