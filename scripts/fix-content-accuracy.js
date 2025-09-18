#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  dryRun: process.argv.includes('--dry-run'),
};

// Files to process and their replacements for accurate content
const contentFixes = [
  // Remove exaggerated "100%" claims
  {
    file: 'components/hero-banner.tsx',
    replacements: [
      { from: '100% Fresh & Natural', to: 'Freshly Made Daily' },
      { from: '100% Fresh', to: 'Fresh Daily' },
      { from: '{ number: "100%", label: "Fresh" }', to: '{ number: "Daily", label: "Fresh Made" }' },
    ]
  },
  {
    file: 'components/modern-hero.tsx',
    replacements: [
      { from: 'Fresh • Natural • Healthy', to: 'Freshly Squeezed • Natural • Healthy' },
      { from: 'Fresh Juice', to: 'Freshly Squeezed Juice' },
      { from: 'finest fresh ingredients', to: 'quality ingredients' },
      { from: 'Fresh Recipes', to: 'Daily Recipes' },
      { from: 'Fresh', to: 'Daily Fresh' },
    ]
  },
  {
    file: 'app/about/page.tsx',
    replacements: [
      { from: '{ icon: Leaf, number: "100%", label: "Fresh Quality" }', to: '{ icon: Leaf, number: "Daily", label: "Fresh Made" }' },
      { from: 'fresh ingredients', to: 'quality ingredients' },
      { from: 'Fresh & Natural', to: 'Daily Fresh & Natural' },
    ]
  },
  {
    file: 'app/menu/[slug]/page.tsx',
    replacements: [
      { from: '100% Fresh', to: 'Freshly Made' },
    ]
  },
  {
    file: 'app/menu/page.tsx',
    replacements: [
      { from: '100% Fresh', to: 'Freshly Made' },
    ]
  },
  {
    file: 'app/ClientPage.tsx',
    replacements: [
      { from: '"100% Fresh"', to: '"Freshly Made"' },
      { from: 'fresh ingredients', to: 'quality ingredients' },
      { from: 'Fresh Ingredients', to: 'Quality Ingredients' },
      { from: 'premium fresh', to: 'premium quality' },
    ]
  },
  {
    file: 'app/layout.tsx',
    replacements: [
      { from: 'fresh ingredients', to: 'quality ingredients' },
      { from: 'Fresh Natural Juices', to: 'Freshly Squeezed Natural Juices' },
      { from: 'Fresh Food', to: 'Healthy Food' },
    ]
  },
  {
    file: 'app/page.tsx',
    replacements: [
      { from: 'fresh ingredients', to: 'quality ingredients' },
      { from: 'fresh juices', to: 'freshly squeezed juices' },
    ]
  },
  {
    file: 'app/contact/page.tsx',
    replacements: [
      { from: 'fresh juices', to: 'freshly squeezed juices' },
    ]
  },
  {
    file: 'components/footer.tsx',
    replacements: [
      { from: 'fresh, healthy juices and food made with fresh ingredients', to: 'freshly squeezed juices and healthy food made with quality ingredients' },
    ]
  },
  {
    file: 'components/ingredients-showcase.tsx',
    replacements: [
      { from: 'Fresh', to: 'Quality' },
      { from: 'fresh daily', to: 'regularly' },
    ]
  },
  {
    file: 'lib/menu-data.ts',
    replacements: [
      { from: 'Fresh Kale', to: 'Quality Kale' },
      { from: 'Fresh Spinach', to: 'Quality Spinach' },
      { from: 'Fresh Apple', to: 'Quality Apple' },
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

function fixContentAccuracy() {
  console.log(`🔧 ${config.dryRun ? 'DRY RUN - ' : ''}Fixing content accuracy and removing exaggerated claims...\n`);

  let totalChanges = 0;
  let filesModified = 0;

  contentFixes.forEach(({ file, replacements }) => {
    const changes = processFile(file, replacements);
    if (changes > 0) {
      totalChanges += changes;
      filesModified++;
    }
  });

  console.log('\n📊 Content Accuracy Fix Summary:');
  console.log(`   Files processed: ${contentFixes.length}`);
  console.log(`   Files modified: ${filesModified}`);
  console.log(`   Total changes made: ${totalChanges}`);

  if (config.dryRun) {
    console.log('\n🔍 This was a dry run. No files were actually modified.');
    console.log('   Run without --dry-run flag to perform the actual fixes.');
  } else {
    console.log('\n✅ Content accuracy successfully improved!');
    console.log('\n📋 What was changed:');
    console.log('   ❌ Removed exaggerated "100%" claims');
    console.log('   ✅ Changed to "Freshly Squeezed" for juices');
    console.log('   ✅ Changed to "Quality ingredients" instead of "fresh ingredients"');
    console.log('   ✅ Changed to "Daily Fresh" or "Freshly Made" for realistic claims');
    console.log('   ✅ Made all content honest and accurate');
    
    console.log('\n🚀 Next Steps:');
    console.log('1. Test your application: "npm run dev"');
    console.log('2. Build for production: "npm run build"');
    console.log('3. Your content is now accurate and honest!');
  }
}

// Run the script
if (require.main === module) {
  fixContentAccuracy();
}

module.exports = { fixContentAccuracy };
