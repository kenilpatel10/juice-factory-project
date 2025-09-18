#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  dryRun: process.argv.includes('--dry-run'),
};

function removeOrganicLabels() {
  const menuDataPath = './data/menu-data.json';
  
  try {
    // Read the menu data file
    const menuData = JSON.parse(fs.readFileSync(menuDataPath, 'utf8'));
    
    let removedCount = 0;
    let updatedDescriptions = 0;
    
    // Process each product
    menuData.products.forEach(product => {
      // Remove isOrganic property
      if (product.hasOwnProperty('isOrganic')) {
        if (!config.dryRun) {
          delete product.isOrganic;
        }
        removedCount++;
        console.log(`${config.dryRun ? '[DRY RUN] ' : ''}Removed isOrganic from: ${product.name}`);
      }
      
      // Update descriptions that mention organic
      if (product.description && product.description.includes('premium organic')) {
        const originalDescription = product.description;
        const updatedDescription = product.description.replace(/premium organic /g, 'premium ');
        
        if (!config.dryRun) {
          product.description = updatedDescription;
        }
        updatedDescriptions++;
        console.log(`${config.dryRun ? '[DRY RUN] ' : ''}Updated description for: ${product.name}`);
        console.log(`  Before: ${originalDescription}`);
        console.log(`  After:  ${updatedDescription}`);
      }
    });
    
    // Write the updated data back to file
    if (!config.dryRun && (removedCount > 0 || updatedDescriptions > 0)) {
      fs.writeFileSync(menuDataPath, JSON.stringify(menuData, null, 2) + '\n');
    }
    
    console.log('\n📊 Organic Removal Summary:');
    console.log(`   isOrganic properties removed: ${removedCount}`);
    console.log(`   Descriptions updated: ${updatedDescriptions}`);
    
    if (config.dryRun) {
      console.log('\n🔍 This was a dry run. No files were actually modified.');
      console.log('   Run without --dry-run flag to perform the actual removal.');
    } else {
      console.log('\n✅ Organic labels successfully removed!');
      console.log('\n📋 What was removed:');
      console.log('   ❌ All "isOrganic": true properties');
      console.log('   ❌ "premium organic" references in descriptions');
      
      console.log('\n🚀 Next Steps:');
      console.log('1. Test your application: "npm run dev"');
      console.log('2. Build for production: "npm run build"');
      console.log('3. Your menu is now free of organic labels!');
    }
    
  } catch (error) {
    console.error('❌ Error processing menu data:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  console.log(`🧹 ${config.dryRun ? 'DRY RUN - ' : ''}Removing organic labels from menu data...\n`);
  removeOrganicLabels();
}

module.exports = { removeOrganicLabels };
