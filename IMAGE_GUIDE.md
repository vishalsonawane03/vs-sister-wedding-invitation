# 📸 Image Organization Guide for Wedding Invitation Website

## 📁 Recommended Folder Structure

I've created the following folder structure for your images:

```
src/
  assets/
    images/
      couple/          # Main couple photos
      gallery/         # Gallery/engagement photos  
      events/          # Event-specific photos
```

## 🖼️ Where to Place Your Images

### 1. **Main Couple Photo (Landing Page Background)**
**Location:** `src/assets/images/couple/`
**Recommended files:**
- `main-couple-photo.jpg` - Primary landing page background
- `couple-portrait.jpg` - Alternative couple photo
- `engagement-photo.jpg` - Engagement ceremony photo

**Optimal specifications:**
- **Resolution:** 1920x1080 or higher
- **Format:** JPG or WebP
- **Size:** Under 2MB for fast loading
- **Aspect ratio:** 16:9 or 3:2 works best

### 2. **Gallery Photos**
**Location:** `src/assets/images/gallery/`
**Recommended files:**
- `gallery-1.jpg` through `gallery-6.jpg` (or more)
- `pre-wedding-1.jpg`, `pre-wedding-2.jpg`
- `engagement-ceremony.jpg`
- `family-photos.jpg`

**Optimal specifications:**
- **Resolution:** 1200x1200 (square) or 1200x800
- **Format:** JPG or WebP
- **Size:** Under 1MB each
- **Aspect ratio:** Square (1:1) works best for gallery grid

### 3. **Event Photos (Optional)**
**Location:** `src/assets/images/events/`
**Recommended files:**
- `haldi-ceremony.jpg`
- `sangeet-night.jpg`
- `wedding-venue.jpg`
- `reception-venue.jpg`

## 🔧 How to Update the Code

### Step 1: Import Images in Components
```javascript
// In LandingSection.jsx
import couplePhoto from '../assets/images/couple/main-couple-photo.jpg';

// In Gallery.jsx
import gallery1 from '../assets/images/gallery/gallery-1.jpg';
import gallery2 from '../assets/images/gallery/gallery-2.jpg';
// ... and so on
```

### Step 2: Replace URLs in Components

**For Landing Page Background:**
In `src/components/LandingSection.jsx`, replace:
```javascript
backgroundImage: `url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
```
With:
```javascript
backgroundImage: `url(${couplePhoto})`
```

**For Gallery Images:**
In `src/components/Gallery.jsx`, replace the `galleryImages` array URLs with your imported images.

## 📋 Image Preparation Checklist

### Before Adding Images:
- [ ] **Resize images** to recommended dimensions
- [ ] **Compress images** to reduce file size (use tools like TinyPNG)
- [ ] **Rename files** with descriptive names (no spaces, use hyphens)
- [ ] **Check image quality** - ensure they look good on both mobile and desktop

### Recommended Image Sizes:
- **Landing background:** 1920x1080px (2MB max)
- **Gallery photos:** 1200x1200px (1MB max each)
- **Profile photos:** 800x800px (500KB max each)

## 🛠️ Tools for Image Optimization

1. **Online Compressors:**
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)

2. **Image Editing:**
   - Canva (for quick edits)
   - Photoshop/GIMP (for advanced editing)

## 🚀 Quick Start Steps

1. **Copy your images** to the respective folders
2. **Rename them** appropriately (e.g., `main-couple-photo.jpg`)
3. **Update the import statements** in the components
4. **Replace the URLs** with imported image variables
5. **Test the website** to ensure images load properly

## 💡 Pro Tips

- **Use WebP format** for better compression (modern browsers support it)
- **Keep original high-res copies** as backups
- **Test on mobile** to ensure images look good on small screens
- **Consider lazy loading** for gallery images if you have many photos

The current website structure is ready for your real images - just follow this guide to replace the placeholder images with your beautiful wedding photos! 📷✨
