# Ingredient Images That Need Real WebP Images

## 🔄 **Images to Download and Replace**

### **High Priority - Currently Using Placeholder Images:**

1. **Chia Seeds** 
   - Current: Using `quinoa.webp` as placeholder
   - Needed: `chia-seeds.webp` or `chia.webp`
   - Description: Small black/white seeds, omega-3 rich superfood
   - Used in: J7-Pink Chia Punch, S1-Brain Booster, S7-Berry Good Morning

2. **Mango**
   - Current: Using `pineapple.webp` as placeholder  
   - Needed: `mango.webp`
   - Description: Orange tropical fruit, sweet and juicy
   - Used in: Multiple smoothies and tropical blends

3. **Kiwifruit**
   - Current: Using `dragon-fruit.webp` as placeholder
   - Needed: `kiwi.webp` or `kiwifruit.webp`
   - Description: Brown fuzzy exterior, green interior with black seeds
   - Used in: J5-Summer Skin Glow

### **Medium Priority - You Mentioned These Need Better Images:**

4. **Pear**
   - Current: `pear.webp` exists but you want a better real image
   - Needed: Replace current `pear.webp` with better quality image
   - Description: Green or yellow pear, fresh and realistic
   - Used in: J7-Pink Chia Punch

5. **Grapes**
   - Current: `grapes.webp` exists but you want a better real image  
   - Needed: Replace current `grapes.webp` with better quality image
   - Description: Purple or green grape cluster
   - Used in: Various fruit juices

6. **Beetroot**
   - Current: `beets.webp` exists but you want a better real image
   - Needed: Replace current `beets.webp` with better quality image  
   - Description: Deep red/purple root vegetable
   - Used in: J7-Pink Chia Punch, SC6-Brain Booster, G3-Kale & Hearty

## ✅ **Recently Fixed - Now Working Correctly:**

- **Strawberries** ✅ - Using `strawberries.webp`
- **Raspberries** ✅ - Using `raspberries.webp`  
- **Blackberries** ✅ - Using `blackberries.webp`
- **Grapefruit** ✅ - Using `grapefruit.webp`

## 📋 **Instructions for Adding Images:**

### **File Requirements:**
- **Format:** WebP (.webp extension)
- **Size:** Recommended 300x300px or similar square aspect ratio
- **Quality:** High quality, clear, realistic photos
- **Background:** Preferably white or transparent background

### **File Locations:**
All images should be placed in: `/public/images/ingredients/`

### **Naming Convention:**
- Use lowercase
- Use hyphens for spaces: `chia-seeds.webp`
- Match the ingredient name as closely as possible

### **Priority Order:**
1. **Chia** (most critical - currently using wrong image)
2. **Mango** (popular ingredient, using wrong image)
3. **Kiwifruit** (using wrong image)
4. **Pear** (improve existing)
5. **Grapes** (improve existing)  
6. **Beetroot** (improve existing)

## 🎯 **Expected Results After Updates:**

- **J7-Pink Chia Punch** will show proper chia seeds, pear, beetroot, and grapefruit images
- **J5-Summer Skin Glow** will show proper kiwifruit image
- **All berry products** already show correct individual berry images
- **Tropical smoothies** will show proper mango images
- **Overall ingredient showcase** will look more professional and accurate

## 🔧 **Technical Notes:**

- Images are automatically loaded by the ingredients showcase component
- No code changes needed once images are added to the correct folder
- Component will automatically use the new images once files are in place
- Build and test after adding images to ensure they display correctly
