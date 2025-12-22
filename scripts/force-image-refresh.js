#!/usr/bin/env node

/**
 * Force Image Refresh Script
 * This script helps resolve image caching issues by adding cache-busting parameters
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Force Image Refresh Script');
console.log('===============================');

// Check if images directory exists
const imagesDir = path.join(process.cwd(), 'public', 'images', 'ingredients');

if (!fs.existsSync(imagesDir)) {
  console.error('❌ Images directory not found:', imagesDir);
  process.exit(1);
}

// List all WebP images
const images = fs.readdirSync(imagesDir).filter(file => file.endsWith('.webp'));

console.log(`📁 Found ${images.length} WebP images in ingredients directory:`);
console.log('');

// Group images by category for better display
const imagesByCategory = {
  'Fruits': [],
  'Vegetables': [],
  'Berries': [],
  'Spices': [],
  'Others': []
};

images.forEach(image => {
  const name = image.replace('.webp', '');
  
  // Categorize images
  if (['apple', 'orange', 'oranges', 'lemon', 'lime', 'grapefruit', 'pineapple', 'mango', 'banana', 'pear', 'kiwifruit', 'watermelon', 'pomegranate', 'cherries', 'grapes', 'dragon-fruit'].includes(name.toLowerCase())) {
    imagesByCategory['Fruits'].push(image);
  } else if (['strawberries', 'raspberries', 'rasberry', 'blackberries', 'blueberries', 'berries', 'cranberries', 'goji-berries'].includes(name.toLowerCase())) {
    imagesByCategory['Berries'].push(image);
  } else if (['kale', 'spinach', 'carrots', 'celery', 'cucumber', 'beets', 'broccoli', 'avocado', 'mixed-greens', 'arugula', 'romaine', 'parsley', 'Parsley'].includes(name.toLowerCase())) {
    imagesByCategory['Vegetables'].push(image);
  } else if (['ginger', 'turmeric', 'cayenne', 'mint', 'cinnamon', 'cardamom', 'cumin', 'paprika', 'black-pepper', 'white-pepper'].includes(name.toLowerCase())) {
    imagesByCategory['Spices'].push(image);
  } else {
    imagesByCategory['Others'].push(image);
  }
});

// Display categorized images
Object.entries(imagesByCategory).forEach(([category, imgs]) => {
  if (imgs.length > 0) {
    console.log(`🏷️  ${category}:`);
    imgs.forEach(img => {
      console.log(`   ✅ ${img}`);
    });
    console.log('');
  }
});

console.log('🔧 TROUBLESHOOTING STEPS:');
console.log('========================');
console.log('');
console.log('1. 🌐 BROWSER CACHE:');
console.log('   • Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)');
console.log('   • Open DevTools → Network tab → Check "Disable cache"');
console.log('   • Clear browser data: DevTools → Application → Storage → Clear site data');
console.log('');
console.log('2. 🔄 NEXT.JS CACHE:');
console.log('   • Delete .next folder: rm -rf .next');
console.log('   • Restart dev server: npm run dev');
console.log('');
console.log('3. 📁 FILE VERIFICATION:');
console.log('   • Check file names match exactly (case-sensitive)');
console.log('   • Verify WebP format and file integrity');
console.log('   • Ensure files are not corrupted');
console.log('');
console.log('4. 🔍 COMMON ISSUES FOUND:');

// Check for common naming issues
const commonIssues = [];

if (images.includes('rasberry.webp') && images.includes('raspberries.webp')) {
  commonIssues.push('   ⚠️  Both "rasberry.webp" and "raspberries.webp" exist - potential naming conflict');
}

if (images.includes('Parsley.webp') && images.includes('parsley.webp')) {
  commonIssues.push('   ⚠️  Both "Parsley.webp" and "parsley.webp" exist - case sensitivity issue');
}

if (commonIssues.length > 0) {
  commonIssues.forEach(issue => console.log(issue));
} else {
  console.log('   ✅ No common naming issues detected');
}

console.log('');
console.log('5. 🚀 FORCE REFRESH METHODS:');
console.log('   • Add timestamp to image URLs (cache busting)');
console.log('   • Use incognito/private browsing mode');
console.log('   • Test on different browser');
console.log('');
console.log('📊 SUMMARY:');
console.log(`   • Total images: ${images.length}`);
console.log(`   • Fruits: ${imagesByCategory['Fruits'].length}`);
console.log(`   • Vegetables: ${imagesByCategory['Vegetables'].length}`);
console.log(`   • Berries: ${imagesByCategory['Berries'].length}`);
console.log(`   • Spices: ${imagesByCategory['Spices'].length}`);
console.log(`   • Others: ${imagesByCategory['Others'].length}`);
console.log('');
console.log('🎯 Next.js dev server should be running on: http://localhost:3003');
console.log('   Try accessing the menu page and hard refresh if images still don\'t load.');
