"use client"

import IngredientCard from "./ingredient-card"
import { Sparkles } from "lucide-react"

interface Ingredient {
  name: string
  image: string
  benefits?: string[]
  description?: string
  category?: string
}

interface IngredientsShowcaseProps {
  ingredients: string[]
}

// Updated ingredient database with corrected image mappings
const ingredientDatabase: Record<string, Ingredient> = {
  Apple: {
    name: "Apple",
    image: "/images/ingredients/apple.webp",
    benefits: ["Fiber", "Natural Sweetness", "Vitamin C"],
    description: "Crisp and refreshing, apples add natural sweetness and essential fiber.",
    category: "Fruits",
  },
  Carrot: {
    name: "Carrot",
    image: "/images/ingredients/carrots.webp",
    benefits: ["Beta Carotene", "Vitamin A", "Eye Health"],
    description: "Rich in beta carotene and vitamin A for eye health and immunity.",
    category: "Vegetables",
  },
  Ginger: {
    name: "Ginger",
    image: "/images/ingredients/ginger.webp",
    benefits: ["Anti-inflammatory", "Digestive Aid", "Immunity"],
    description: "Powerful anti-inflammatory properties and aids in digestion and immunity.",
    category: "Spices",
  },
  Kale: {
    name: "Kale",
    image: "/images/ingredients/kale.webp",
    benefits: ["Superfood", "Vitamin C", "Fiber"],
    description: "A nutritional powerhouse loaded with vitamins, minerals, and powerful antioxidants.",
    category: "Leafy Greens",
  },
  Lemon: {
    name: "Lemon",
    image: "/images/ingredients/lemon.webp",
    benefits: ["Vitamin C", "Detox", "Alkalizing"],
    description: "Rich in vitamin C and natural detoxifying properties, adds zesty freshness.",
    category: "Citrus",
  },
  Spinach: {
    name: "Spinach",
    image: "/images/ingredients/spinach.webp",
    benefits: ["Iron Rich", "Vitamin K", "Antioxidants"],
    description: "Packed with iron and vitamins, spinach provides essential nutrients for energy and bone health.",
    category: "Leafy Greens",
  },
  Avocado: {
    name: "Avocado",
    image: "/images/ingredients/avocado.webp",
    benefits: ["Healthy Fats", "Creamy", "Potassium"],
    description: "Creamy avocado rich in healthy monounsaturated fats and potassium.",
    category: "Fruits",
  },
  Berries: {
    name: "Berries",
    image: "/images/ingredients/berries.webp",
    benefits: ["Antioxidants", "Vitamin C", "Fiber"],
    description: "Mixed berries packed with antioxidants and natural compounds.",
    category: "Berries",
  },
  Cucumber: {
    name: "Cucumber",
    image: "/images/ingredients/cucumber.webp",
    benefits: ["Hydrating", "Low Calorie", "Refreshing"],
    description: "Extremely hydrating and low in calories, perfect for refreshing drinks.",
    category: "Vegetables",
  },
  Mint: {
    name: "Mint",
    image: "/images/ingredients/mint.webp",
    benefits: ["Refreshing", "Digestive", "Aromatic"],
    description: "Refreshing and aromatic, mint aids digestion and adds cooling properties.",
    category: "Herbs",
  },
  Orange: {
    name: "Orange",
    image: "/images/ingredients/oranges.webp",
    benefits: ["Vitamin C", "Citrus", "Natural Sweetness"],
    description: "Quality citrus fruit packed with vitamin C and natural sweetness.",
    category: "Citrus",
  },
  Mango: {
    name: "Mango",
    image: "/images/ingredients/mango.webp",
    benefits: ["Beta Carotene", "Sweet", "Vitamin A"],
    description: "Rich in beta carotene and vitamin A, provides natural tropical sweetness.",
    category: "Tropical Fruits",
  },
  "Mango Salsa": {
    name: "Mango Salsa",
    image: "/images/ingredients/mango.webp",
    benefits: ["Tropical Flavor", "Vitamin C", "Fresh"],
    description: "Fresh tropical mango salsa with vibrant flavors and natural sweetness.",
    category: "Salsas",
  },
  "Passion Fruit": {
    name: "Passion Fruit",
    image: "/images/ingredients/passion-fruit.webp",
    benefits: ["Vitamin C", "Antioxidants", "Exotic Flavor"],
    description: "Exotic tropical fruit with intense flavor and rich vitamin C content.",
    category: "Tropical Fruits",
  },
  "Whey Protein": {
    name: "Whey Protein",
    image: "/images/ingredients/whey-protein.webp",
    benefits: ["High Protein", "Muscle Building", "Post-Workout"],
    description: "Premium whey protein powder for muscle building and recovery.",
    category: "Protein",
  },
  Coffee: {
    name: "Coffee",
    image: "/images/ingredients/coffe.webp",
    benefits: ["Energy Boost", "Antioxidants", "Mental Focus"],
    description: "Rich coffee providing natural caffeine and antioxidants for energy and focus.",
    category: "Beverages",
  },
  "Green Tea": {
    name: "Green Tea",
    image: "/images/ingredients/green-tea.webp",
    benefits: ["Antioxidants", "Metabolism", "Mental Clarity"],
    description: "Premium green tea rich in antioxidants and natural compounds for health and focus.",
    category: "Beverages",
  },
  "Natural Yogurt": {
    name: "Natural Yogurt",
    image: "/images/ingredients/yogurt.webp",
    benefits: ["Probiotics", "Protein", "Creamy Texture"],
    description: "Creamy natural yogurt with beneficial probiotics and high-quality protein.",
    category: "Dairy",
  },
  Yogurt: {
    name: "Yogurt",
    image: "/images/ingredients/yogurt.webp",
    benefits: ["Probiotics", "Protein", "Creamy Texture"],
    description: "Creamy yogurt with beneficial probiotics and smooth texture.",
    category: "Dairy",
  },
  Spirulina: {
    name: "Spirulina",
    image: "/images/ingredients/spirulina.webp",
    benefits: ["Superfood", "Protein", "Detox"],
    description: "Blue-green algae superfood packed with protein, vitamins, and detoxifying properties.",
    category: "Superfoods",
  },
  "Vanilla Bean": {
    name: "Vanilla Bean",
    image: "/images/ingredients/vanilla.webp",
    benefits: ["Natural Flavor", "Antioxidants", "Aromatic"],
    description: "Pure vanilla bean providing natural sweetness and rich aromatic flavor.",
    category: "Flavoring",
  },
  Oats: {
    name: "Oats",
    image: "/images/ingredients/oats.webp",
    benefits: ["Fiber", "Heart Health", "Sustained Energy"],
    description: "Whole grain oats rich in fiber and providing sustained energy release.",
    category: "Grains",
  },
  Flaxseed: {
    name: "Flaxseed",
    image: "/images/ingredients/flaxseed.webp",
    benefits: ["Omega-3", "Fiber", "Lignans"],
    description: "Nutrient-dense seeds packed with omega-3 fatty acids and fiber.",
    category: "Seeds",
  },
  Goji: {
    name: "Goji",
    image: "/images/ingredients/goji-berries.webp",
    benefits: ["Antioxidants", "Vitamin C", "Superfruit"],
    description: "Antioxidant-rich superfruit berries with exceptional nutritional value.",
    category: "Superfoods",
  },
  Dates: {
    name: "Dates",
    image: "/images/ingredients/dates.webp",
    benefits: ["Natural Sweetener", "Fiber", "Potassium"],
    description: "Sweet dried fruit providing natural sweetness and essential minerals.",
    category: "Natural Sweeteners",
  },
  "Raw Cacao": {
    name: "Raw Cacao",
    image: "/images/ingredients/chocolate.webp",
    benefits: ["Antioxidants", "Magnesium", "Mood Boost"],
    description: "Pure raw cacao rich in antioxidants and natural mood-enhancing compounds.",
    category: "Superfoods",
  },
  "Coconut Flakes": {
    name: "Coconut Flakes",
    image: "/images/ingredients/coconut-flakes.webp",
    benefits: ["Healthy Fats", "Fiber", "Tropical Flavor"],
    description: "Dried coconut flakes providing healthy fats and tropical flavor.",
    category: "Nuts & Seeds",
  },
  "Peanut Butter": {
    name: "Peanut Butter",
    image: "/images/ingredients/peanut-butter.webp",
    benefits: ["Protein", "Healthy Fats", "Creamy Texture"],
    description: "Creamy peanut butter rich in protein and healthy fats.",
    category: "Nut Butters",
  },
  "Filtered Water": {
    name: "Filtered Water",
    image: "/images/ingredients/filtered-water.webp",
    benefits: ["Hydration", "Pure", "Essential"],
    description: "Pure filtered water as the base for all our fresh beverages.",
    category: "Base Liquids",
  },
  "Harissa Falafel": {
    name: "Harissa Falafel",
    image: "/images/ingredients/chickpeas.webp",
    benefits: ["Plant Protein", "Spiced", "Mediterranean"],
    description: "Spiced chickpea falafel with harissa for a flavorful Mediterranean protein.",
    category: "Plant Proteins",
  },
  Kumara: {
    name: "Kumara",
    image: "/images/ingredients/carrots.webp",
    benefits: ["Vitamin A", "Sweet", "Roasted"],
    description: "Sweet roasted kumara (sweet potato) providing natural sweetness and vitamin A.",
    category: "Vegetables",
  },
  Coriander: {
    name: "Coriander",
    image: "/images/ingredients/herbs.webp",
    benefits: ["Fresh Flavor", "Aromatic", "Vitamin K"],
    description: "Fresh coriander leaves adding bright, aromatic flavor to dishes.",
    category: "Herbs",
  },
  "Cos Lettuce": {
    name: "Cos Lettuce",
    image: "/images/ingredients/romaine.webp",
    benefits: ["Crisp Texture", "Low Calorie", "Vitamin K"],
    description: "Crisp cos lettuce providing fresh crunch and essential vitamins.",
    category: "Leafy Greens",
  },
  "Garlic Aioli": {
    name: "Garlic Aioli",
    image: "/images/ingredients/garlic.webp",
    benefits: ["Creamy", "Flavorful", "Garlic"],
    description: "Creamy garlic aioli sauce adding rich flavor and smooth texture.",
    category: "Sauces",
  },
  "Sweet Chili Jam": {
    name: "Sweet Chili Jam",
    image: "/images/ingredients/cayenne.webp",
    benefits: ["Sweet & Spicy", "Flavor Boost", "Tangy"],
    description: "Sweet and spicy chili jam providing the perfect balance of heat and sweetness.",
    category: "Sauces",
  },
  Strawberries: {
    name: "Strawberries",
    image: "/images/ingredients/strawberries.webp",
    benefits: ["Vitamin C", "Antioxidants", "Natural Sweetness"],
    description: "Sweet and juicy berries packed with vitamin C and powerful antioxidants.",
    category: "Berries",
  },
  Raspberries: {
    name: "Raspberries",
    image: "/images/ingredients/raspberries.webp",
    benefits: ["Fiber", "Antioxidants", "Vitamin C"],
    description: "Tart and flavorful berries rich in fiber and antioxidants.",
    category: "Berries",
  },
  Blackberries: {
    name: "Blackberries",
    image: "/images/ingredients/blackberries.webp",
    benefits: ["Antioxidants", "Vitamin K", "Fiber"],
    description: "Dark berries loaded with antioxidants and essential nutrients.",
    category: "Berries",
  },
  Pear: {
    name: "Pear",
    image: "/images/ingredients/pear.webp",
    benefits: ["Fiber", "Natural Sweetness", "Vitamin C"],
    description: "Sweet and juicy fruit with natural fiber and gentle sweetness.",
    category: "Fruits",
  },
  "Mixed Berries": {
    name: "Mixed Berries",
    image: "/images/ingredients/berries.webp",
    benefits: ["Antioxidants", "Vitamin C", "Fiber"],
    description: "A blend of various berries packed with antioxidants and natural compounds.",
    category: "Berries",
  },
  "Strawberry or Mixed Berry": {
    name: "Strawberry or Mixed Berry",
    image: "/images/ingredients/strawberries.webp",
    benefits: ["Antioxidants", "Vitamin C", "Natural Sweetness"],
    description: "Choice of sweet strawberries or mixed berry blend for variety.",
    category: "Berries",
  },
  Kiwifruit: {
    name: "Kiwifruit",
    image: "/images/ingredients/kiwifruit.webp",
    benefits: ["Vitamin C", "Fiber", "Antioxidants"],
    description: "Tangy tropical fruit packed with vitamin C and natural enzymes.",
    category: "Tropical Fruits",
  },
  Grapefruit: {
    name: "Grapefruit",
    image: "/images/ingredients/grapefruit.webp",
    benefits: ["Vitamin C", "Metabolism", "Citrus"],
    description: "Tangy citrus fruit that supports metabolism and provides vitamin C.",
    category: "Citrus",
  },
  "Cayenne Pepper": {
    name: "Cayenne Pepper",
    image: "/images/ingredients/cayenne.webp",
    benefits: ["Metabolism Boost", "Anti-inflammatory", "Circulation"],
    description: "Spicy red pepper that boosts metabolism and supports circulation.",
    category: "Spices",
  },
  Milk: {
    name: "Milk",
    image: "/images/ingredients/milk.webp",
    benefits: ["Protein", "Calcium", "Creamy Texture"],
    description: "Rich and creamy milk that adds protein and smooth texture to drinks.",
    category: "Dairy",
  },
  Chocolate: {
    name: "Chocolate",
    image: "/images/ingredients/chocolate.webp",
    benefits: ["Antioxidants", "Mood Boost", "Rich Flavor"],
    description: "Rich cocoa chocolate that provides antioxidants and indulgent flavor.",
    category: "Flavoring",
  },
  "Cacao/Chocolate": {
    name: "Cacao/Chocolate",
    image: "/images/ingredients/chocolate.webp",
    benefits: ["Antioxidants", "Mood Boost", "Rich Flavor"],
    description: "Pure cacao chocolate providing rich flavor and powerful antioxidants.",
    category: "Flavoring",
  },
  Pineapple: {
    name: "Pineapple",
    image: "/images/ingredients/pineapple.webp",
    benefits: ["Bromelain", "Tropical", "Vitamin C"],
    description: "Contains bromelain enzyme for digestion and brings tropical sweetness.",
    category: "Tropical Fruits",
  },
  Beetroot: {
    name: "Beetroot",
    image: "/images/ingredients/beets.webp",
    benefits: ["Nitrates", "Blood Flow", "Stamina"],
    description: "Rich in nitrates that support blood flow and athletic performance.",
    category: "Vegetables",
  },
  Celery: {
    name: "Celery",
    image: "/images/ingredients/celery.webp",
    benefits: ["Hydrating", "Low Calorie", "Minerals"],
    description: "Hydrating vegetable with natural minerals and very low calories.",
    category: "Vegetables",
  },
  Blueberry: {
    name: "Blueberry",
    image: "/images/ingredients/blueberries.webp",
    benefits: ["Brain Health", "Antioxidants", "Memory"],
    description: "Known for brain health benefits and high antioxidant content.",
    category: "Berries",
  },
  Parsley: {
    name: "Parsley",
    image: "/images/ingredients/Parsley.webp",
    benefits: ["Vitamin K", "Quality Flavor", "Detox"],
    description: "Quality herb rich in vitamin K and natural detoxifying compounds.",
    category: "Herbs",
  },
  Watermelon: {
    name: "Watermelon",
    image: "/images/ingredients/watermelon.webp",
    benefits: ["Hydrating", "Lycopene", "Refreshing"],
    description: "Extremely hydrating fruit with lycopene and natural sweetness.",
    category: "Fruits",
  },
  Banana: {
    name: "Banana",
    image: "/images/ingredients/banana.webp",
    benefits: ["Potassium", "Energy", "Creamy Texture"],
    description: "Rich in potassium and natural sugars, provides sustained energy and creamy texture.",
    category: "Fruits",
  },
  "Coconut Water": {
    name: "Coconut Water",
    image: "/images/ingredients/coconut-water.webp",
    benefits: ["Electrolytes", "Hydrating", "Natural"],
    description: "Natural electrolyte source, perfect for hydration and mineral replenishment.",
    category: "Natural Liquids",
  },
  Turmeric: {
    name: "Turmeric",
    image: "/images/ingredients/turmeric.webp",
    benefits: ["Anti-inflammatory", "Antioxidant", "Immunity"],
    description: "Powerful anti-inflammatory spice with curcumin for health benefits.",
    category: "Spices",
  },
  "Mixed Greens": {
    name: "Mixed Greens",
    image: "/images/ingredients/mixed-greens.webp",
    benefits: ["Vitamins", "Minerals", "Low Calorie"],
    description: "A variety of fresh leafy greens providing essential vitamins and minerals.",
    category: "Leafy Greens",
  },
  Chia: {
    name: "Chia",
    image: "/images/ingredients/chia.webp",
    benefits: ["Omega-3", "Fiber", "Protein"],
    description: "Tiny seeds packed with omega-3 fatty acids, fiber, and protein.",
    category: "Seeds",
  },
  Almonds: {
    name: "Almonds",
    image: "/images/ingredients/almonds.webp",
    benefits: ["Healthy Fats", "Protein", "Vitamin E"],
    description: "Nutrient-dense nuts rich in healthy fats, protein, and vitamin E.",
    category: "Nuts",
  },
  "Raw Honey": {
    name: "Raw Honey",
    image: "/images/ingredients/honey.webp",
    benefits: ["Natural Sweetener", "Antibacterial", "Energy"],
    description: "Unprocessed honey with natural antibacterial properties and sustained energy.",
    category: "Natural Sweeteners",
  },
  Acai: {
    name: "Acai",
    image: "/images/ingredients/acai.webp",
    benefits: ["Antioxidants", "Heart Health", "Energy"],
    description: "Superfood berry rich in antioxidants, fiber, and heart-healthy fats.",
    category: "Superfoods",
  },
  Chicken: {
    name: "Chicken",
    image: "/images/ingredients/chicken.webp",
    benefits: ["Lean Protein", "Muscle Building", "Satiety"],
    description: "Lean chicken breast providing high-quality protein for muscle health.",
    category: "Proteins",
  },
  Capsicum: {
    name: "Capsicum",
    image: "/images/ingredients/capsicum.webp",
    benefits: ["Vitamin C", "Antioxidants", "Metabolism"],
    description: "Fresh capsicum peppers rich in vitamin C and antioxidants.",
    category: "Vegetables",
  },
  "Jerk Aioli": {
    name: "Jerk Aioli",
    image: "/images/ingredients/garlic.webp", // Placeholder
    benefits: ["Flavor Boost", "Creamy", "Spicy"],
    description: "Creamy and spicy jerk aioli adding bold Caribbean flavors.",
    category: "Sauces",
  },
  "Whole Wheat Tortilla": {
    name: "Whole Wheat Tortilla",
    image: "/images/ingredients/oats.webp", // Placeholder
    benefits: ["Fiber", "Complex Carbs", "Energy"],
    description: "Wholesome whole wheat tortilla providing fiber and sustained energy.",
    category: "Grains",
  },
  "Red Onion": {
    name: "Red Onion",
    image: "/images/ingredients/red-onion.webp",
    benefits: ["Antioxidants", "Flavor", "Heart Health"],
    description: "Fresh red onion adding sharp flavor and antioxidants.",
    category: "Vegetables",
  },
  Tomato: {
    name: "Tomato",
    image: "/images/ingredients/capsicum.webp", // Placeholder (Best available red vegetable)
    benefits: ["Lycopene", "Vitamin C", "Heart Health"],
    description: "Juicy tomatoes rich in lycopene and vitamin C.",
    category: "Vegetables",
  },
  Lime: {
    name: "Lime",
    image: "/images/ingredients/lime.webp",
    benefits: ["Vitamin C", "Digestion", "Zest"],
    description: "Zesty lime providing vitamin C and digestive benefits.",
    category: "Citrus",
  },
  "Black Pepper": {
    name: "Black Pepper",
    image: "/images/ingredients/black-pepper.webp",
    benefits: ["Digestion", "Anti-inflammatory", "Flavor"],
    description: "Freshly ground black pepper for spice and digestion.",
    category: "Spices",
  },
  "Wild Rocket": {
    name: "Wild Rocket",
    image: "/images/ingredients/mixed-greens.webp", // Alternative to arugula
    benefits: ["Vitamin K", "Nitrates", "Peppery Flavor"],
    description: "Peppery wild rocket leaves rich in nitrates and vitamin K.",
    category: "Leafy Greens",
  },
}

export default function IngredientsShowcase({ ingredients = [] }: IngredientsShowcaseProps) {
  // Get ingredient data with better matching
  const getIngredientData = (ingredientName: string): Ingredient => {
    // First try exact match
    if (ingredientDatabase[ingredientName]) {
      return ingredientDatabase[ingredientName]
    }

    // Try case-insensitive match
    const lowerIngredient = ingredientName.toLowerCase()
    const matchedKey = Object.keys(ingredientDatabase).find((key) => key.toLowerCase() === lowerIngredient)

    if (matchedKey) {
      return ingredientDatabase[matchedKey]
    }

    // Try partial match
    const partialMatchKey = Object.keys(ingredientDatabase).find(
      (key) => key.toLowerCase().includes(lowerIngredient) || lowerIngredient.includes(key.toLowerCase()),
    )

    if (partialMatchKey) {
      return ingredientDatabase[partialMatchKey]
    }

    // No match found - use fallback with actual image
    return {
      name: ingredientName,
      image: "", // No image fallback
      benefits: ["Natural", "Quality"],
      description: "A fresh, natural ingredient that adds flavor and nutrition.",
      category: "Other",
    }
  }

  const ingredientData = ingredients.map(getIngredientData)

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 mr-3 animate-pulse" />
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Premium Ingredients</h3>
          <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 ml-3 animate-pulse" />
        </div>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Every ingredient is carefully selected for maximum nutrition and flavor
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-3 sm:p-4 text-center border border-purple-200 dark:border-purple-700">
          <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">{ingredients.length}</div>
          <div className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">Total Ingredients</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-3 sm:p-4 text-center border border-blue-200 dark:border-blue-700">
          <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">Premium</div>
          <div className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">Quality</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-3 sm:p-4 text-center border border-green-200 dark:border-green-700">
          <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">Quality</div>
          <div className="text-xs sm:text-sm text-green-700 dark:text-green-300">Daily</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-3 sm:p-4 text-center border border-orange-200 dark:border-orange-700">
          <div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400">Premium</div>
          <div className="text-xs sm:text-sm text-orange-700 dark:text-orange-300">Quality</div>
        </div>
      </div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {ingredientData.map((ingredient, index) => (
          <IngredientCard
            key={ingredient.name}
            name={ingredient.name}
            image={ingredient.image}
            benefits={ingredient.benefits}
            description={ingredient.description}
            index={index}
          />
        ))}
      </div>

      {/* Fun Fact */}
      {/* <div
        className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center animate-fade-in-up"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 mr-2 animate-spin" />
          <h4 className="text-lg sm:text-xl font-bold">Did You Know?</h4>
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 ml-2 animate-spin" />
        </div>
        <p className="text-purple-100 max-w-2xl mx-auto text-sm sm:text-base">
          Our ingredients are sourced from local local farms and delivered regularly to ensure maximum nutritional
          value and taste!
        </p>
      </div> */}
    </div>
  )
}
