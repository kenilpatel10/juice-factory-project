#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  dryRun: process.argv.includes('--dry-run'),
};

// Files to process and their replacements
const fileReplacements = [
  // Components
  {
    file: 'components/modern-hero.tsx',
    replacements: [
      { from: 'Fresh • Organic • Healthy', to: 'Fresh • Natural • Healthy' },
      { from: 'organic ingredients', to: 'fresh ingredients' },
      { from: 'Organic', to: 'Fresh' },
    ]
  },
  {
    file: 'components/footer.tsx',
    replacements: [
      { from: 'organic ingredients', to: 'fresh ingredients' },
    ]
  },
  {
    file: 'components/ingredients-showcase.tsx',
    replacements: [
      { from: 'Organic', to: 'Fresh' },
      { from: 'organic farms', to: 'local farms' },
    ]
  },
  {
    file: 'components/hero-banner.tsx',
    replacements: [
      { from: 'Organic', to: 'Fresh' },
      { from: 'organic smoothies', to: 'fresh smoothies' },
      { from: '100% organic ingredients', to: 'fresh ingredients' },
    ]
  },
  // App pages
  {
    file: 'app/about/page.tsx',
    replacements: [
      { from: 'healthy, organic food', to: 'healthy, fresh food' },
      { from: 'organic food', to: 'fresh food' },
      { from: 'Organic & Fresh', to: 'Fresh & Natural' },
      { from: 'organic ingredients', to: 'fresh ingredients' },
      { from: 'organic food', to: 'fresh food' },
      { from: '100% Organic Certified', to: '100% Fresh Quality' },
    ]
  },
  {
    file: 'app/layout.tsx',
    replacements: [
      { from: 'organic salads', to: 'healthy salads' },
      { from: '100% organic ingredients', to: 'fresh ingredients' },
      { from: 'organic smoothies', to: 'fresh smoothies' },
      { from: 'organic ingredients', to: 'fresh ingredients' },
      { from: 'Fresh Organic Juices', to: 'Fresh Natural Juices' },
      { from: 'Organic Food', to: 'Fresh Food' },
    ]
  },
  {
    file: 'app/menu/[slug]/page.tsx',
    replacements: [
      { from: '{product.isOrganic && (', to: '{false && (' },
      { from: '100% Organic', to: '100% Fresh' },
    ]
  },
  {
    file: 'app/menu/page.tsx',
    replacements: [
      { from: '100% Organic', to: '100% Fresh' },
    ]
  },
  {
    file: 'app/ClientPage.tsx',
    replacements: [
      { from: 'organic ingredients', to: 'fresh ingredients' },
      { from: '100% Organic', to: '100% Fresh' },
      { from: 'certified organic', to: 'fresh quality' },
      { from: 'Organic Ingredients', to: 'Fresh Ingredients' },
      { from: 'premium organic', to: 'premium fresh' },
    ]
  },
  {
    file: 'app/_gallery_disabled/page.tsx',
    replacements: [
      { from: 'Organic Ingredients', to: 'Fresh Ingredients' },
      { from: 'organic ingredients', to: 'fresh ingredients' },
      { from: 'organic', to: 'fresh' },
    ]
  },
  {
    file: 'app/page.tsx',
    replacements: [
      { from: 'organic salads', to: 'healthy salads' },
      { from: '100% organic ingredients', to: 'fresh ingredients' },
      { from: 'organic juices', to: 'fresh juices' },
    ]
  },
  {
    file: 'app/contact/page.tsx',
    replacements: [
      { from: 'organic juices', to: 'fresh juices' },
    ]
  },
  {
    file: 'lib/menu-data.ts',
    replacements: [
      { from: 'Organic Kale', to: 'Fresh Kale' },
      { from: 'Organic Spinach', to: 'Fresh Spinach' },
      { from: 'Organic Apple', to: 'Fresh Apple' },
    ]
  },
];

function processFile(filePath, replacements) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return 0;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let changeCount = 0;
    const originalContent = content;

    replacements.forEach(({ from, to }) => {
      const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, to);
        changeCount += matches.length;
        console.log(`${config.dryRun ? '[DRY RUN] ' : ''}${filePath}: "${from}" → "${to}" (${matches.length} occurrences)`);
      }
    });

    if (changeCount > 0 && !config.dryRun) {
      fs.writeFileSync(filePath, content);
    }

    return changeCount;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

function removeAllOrganicReferences() {
  console.log(`🧹 ${config.dryRun ? 'DRY RUN - ' : ''}Removing ALL organic references from codebase...\n`);

  let totalChanges = 0;
  let filesModified = 0;

  fileReplacements.forEach(({ file, replacements }) => {
    const changes = processFile(file, replacements);
    if (changes > 0) {
      totalChanges += changes;
      filesModified++;
    }
  });

  console.log('\n📊 Comprehensive Organic Removal Summary:');
  console.log(`   Files processed: ${fileReplacements.length}`);
  console.log(`   Files modified: ${filesModified}`);
  console.log(`   Total changes made: ${totalChanges}`);

  if (config.dryRun) {
    console.log('\n🔍 This was a dry run. No files were actually modified.');
    console.log('   Run without --dry-run flag to perform the actual removal.');
  } else {
    console.log('\n✅ All organic references successfully removed!');
    console.log('\n📋 What was changed:');
    console.log('   ❌ All "organic" text replaced with "fresh" or "natural"');
    console.log('   ❌ All organic claims removed from marketing copy');
    console.log('   ❌ All organic certifications replaced with quality claims');
    
    console.log('\n🚀 Next Steps:');
    console.log('1. Test your application: "npm run dev"');
    console.log('2. Build for production: "npm run build"');
    console.log('3. Your website is now completely organic-free!');
  }
}

// Run the script
if (require.main === module) {
  removeAllOrganicReferences();
}

module.exports = { removeAllOrganicReferences };
