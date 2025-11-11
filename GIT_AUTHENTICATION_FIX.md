# 🔧 Git Authentication Fix Guide

## ❌ **The Problem:**
You're getting a 403 permission error because:
- Repository: `patilvishal03/vs-sister-wedding.git`
- Local Git user: `vishalsonawane03`
- **Mismatch in usernames!**

## ✅ **Solution Options:**

### **Option 1: Use Personal Access Token (Recommended)**

#### Step 1: Create Personal Access Token
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name: "Wedding Website Deployment"
4. Expiration: 90 days (or custom)
5. Scopes: Check ✅ **repo** (full control)
6. Click "Generate token"
7. **COPY THE TOKEN** (you won't see it again!)

#### Step 2: Update Remote URL with Token
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/patilvishal03/vs-sister-wedding.git
```
*Replace YOUR_TOKEN with the token you copied*

#### Step 3: Push Again
```bash
git push -u origin main
```

### **Option 2: Use SSH (Alternative)**

#### Step 1: Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

#### Step 2: Add SSH Key to GitHub
1. Copy the public key: `cat ~/.ssh/id_ed25519.pub`
2. Go to GitHub → Settings → SSH and GPG keys
3. Click "New SSH key"
4. Paste the key and save

#### Step 3: Update Remote URL
```bash
git remote set-url origin git@github.com:patilvishal03/vs-sister-wedding.git
git push -u origin main
```

### **Option 3: Create New Repository Under Correct Username**

#### If you want to use `vishalsonawane03` account:
1. Create new repository under `vishalsonawane03`
2. Update remote:
```bash
git remote set-url origin https://github.com/vishalsonawane03/vs-sister-wedding.git
git push -u origin main
```

## 🚀 **Quick Fix Commands:**

### **Using Personal Access Token (Easiest):**
```bash
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://YOUR_TOKEN@github.com/patilvishal03/vs-sister-wedding.git
git push -u origin main
```

### **Check Current Configuration:**
```bash
git remote -v
git config --global user.name
git config --global user.email
```

## 🎯 **After Successful Push:**

Your website will be available at:
- **Repository:** https://github.com/patilvishal03/vs-sister-wedding
- **GitHub Pages:** https://patilvishal03.github.io/vs-sister-wedding/

## 💡 **Recommendation:**
Use **Option 1 (Personal Access Token)** - it's the quickest and most reliable method for this situation.

Let me know which option you'd like to try! 🚀
