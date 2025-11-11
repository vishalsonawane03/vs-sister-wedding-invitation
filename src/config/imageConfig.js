// Image Configuration for Wedding Invitation Website
// This file shows you exactly where each image is used

// ===== LANDING PAGE IMAGES =====
// Used in: src/components/LandingSection.jsx
export const landingImages = {
  // Main background image for the landing page
  coupleBackground: 'src/assets/images/couple/main-couple-photo.jpg',
  // Alternative: You can also use engagement photos as background
  // coupleBackground: 'src/assets/images/couple/engagement-photo.jpg',
};

// ===== GALLERY IMAGES =====
// Used in: src/components/Gallery.jsx
export const galleryImages = [
  {
    id: 1,
    src: 'src/assets/images/gallery/gallery-1.jpg',
    alt: 'Engagement Photo 1',
    caption: 'Our beautiful engagement ceremony'
  },
  {
    id: 2,
    src: 'src/assets/images/gallery/gallery-2.jpg',
    alt: 'Pre-wedding Photo 1',
    caption: 'A moment of pure joy and laughter'
  },
  {
    id: 3,
    src: 'src/assets/images/gallery/gallery-3.jpg',
    alt: 'Couple Portrait',
    caption: 'Together forever, side by side'
  },
  {
    id: 4,
    src: 'src/assets/images/gallery/gallery-4.jpg',
    alt: 'Ring Ceremony',
    caption: 'The moment we said yes to forever'
  },
  {
    id: 5,
    src: 'src/assets/images/gallery/gallery-5.jpg',
    alt: 'Traditional Ceremony',
    caption: 'Blessed by tradition and love'
  },
  {
    id: 6,
    src: 'src/assets/images/gallery/gallery-6.jpg',
    alt: 'Family Photo',
    caption: 'Love and blessings from our families'
  }
];

// ===== COUPLE PROFILE IMAGES (Optional) =====
// Used in: src/components/AboutCouple.jsx
export const profileImages = {
  bride: 'src/assets/images/couple/gaytri-profile.jpg',
  groom: 'src/assets/images/couple/jignesh-profile.jpg'
};

// ===== EVENT IMAGES (Optional) =====
// Used in: src/components/EventDetails.jsx or as backgrounds
export const eventImages = {
  haldi: 'src/assets/images/events/haldi-ceremony.jpg',
  sangeet: 'src/assets/images/events/sangeet-night.jpg',
  wedding: 'src/assets/images/events/wedding-venue.jpg',
  reception: 'src/assets/images/events/reception-venue.jpg'
};

// ===== CURRENT PLACEHOLDER IMAGES =====
// These are the current Unsplash URLs that need to be replaced:

/*
LANDING PAGE BACKGROUND (LandingSection.jsx):
Current: https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80
Replace with: Your main couple photo

GALLERY IMAGES (Gallery.jsx):
Current: 6 different Unsplash wedding photos
Replace with: Your engagement/pre-wedding photos

ABOUT COUPLE (AboutCouple.jsx):
Current: SVG placeholder icons
Replace with: Individual profile photos (optional)
*/

export default {
  landingImages,
  galleryImages,
  profileImages,
  eventImages
};
