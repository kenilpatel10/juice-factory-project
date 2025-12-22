
const fs = require('fs');
const path = require('path');

const menuDataPath = '/home/kenil-patel/Downloads/jj/jj-final/data/menu-data.json';
const imagesDir = '/home/kenil-patel/Downloads/jj/jj-final/public/images/ingredients';

try {
  const menuData = JSON.parse(fs.readFileSync(menuDataPath, 'utf8'));
  const products = menuData.products;

  const allIngredients = new Set();
  products.forEach(product => {
    if (product.ingredients) {
      product.ingredients.forEach(ing => allIngredients.add(ing));
    }
  });

  const existingImages = fs.readdirSync(imagesDir);
  const existingImageNames = new Set(existingImages.map(img => img.toLowerCase().replace(/\.webp$/, '')));

  const missingIngredients = [];

  allIngredients.forEach(ingredient => {
    // Normalize ingredient name to match image filename format
    // e.g., "Baby Spinach" -> "baby-spinach"
    // "Fresh Turmeric" -> "fresh-turmeric" (or maybe just "turmeric"?)
    // The user's current naming convention seems to be lowercase with hyphens.
    
    const normalized = ingredient.toLowerCase().replace(/ /g, '-');
    
    // Check for direct match
    if (existingImageNames.has(normalized)) {
        return;
    }

    // Check for singular/plural variations (simple check)
    if (existingImageNames.has(normalized + 's')) return;
    if (normalized.endsWith('s') && existingImageNames.has(normalized.slice(0, -1))) return;

    // Check for "fresh" prefix variations which seem common in the menu data
    const withoutFresh = normalized.replace(/^fresh-/, '');
    if (existingImageNames.has(withoutFresh)) return;

    // Check for "baby" prefix
    const withoutBaby = normalized.replace(/^baby-/, '');
    if (existingImageNames.has(withoutBaby)) return;
    
    // Check for "raw" prefix
    const withoutRaw = normalized.replace(/^raw-/, '');
    if (existingImageNames.has(withoutRaw)) return;

    missingIngredients.push({
        original: ingredient,
        normalized: normalized,
        potentialMatch: "No exact match found"
    });
  });

  console.log("Missing Ingredients Images:");
  missingIngredients.forEach(item => {
    console.log(`- ${item.original} (Expected file: ${item.normalized}.webp)`);
  });

} catch (error) {
  console.error("Error:", error);
}
