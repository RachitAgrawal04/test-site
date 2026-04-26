import heroArt from "../assets/hero-feast.svg";
import gatherArt from "../assets/kitchen-gather.svg";
import patternTile from "../assets/pantry-pattern.svg";

export const featuredRecipes = [
  {
    id: 1,
    title: "Charred Citrus Salmon Bowl",
    author: "Mina Torres",
    time: "30 min",
    difficulty: "Weeknight",
    tags: ["Bright", "Protein-rich"],
    accent: "from-peach/75 via-[#f7ddc4] to-white",
    description:
      "Silky salmon over herb rice, crunchy cucumber ribbons, and a roasted orange dressing with a little heat.",
  },
  {
    id: 2,
    title: "Saffron Tomato Butter Pasta",
    author: "Rehan Kapur",
    time: "40 min",
    difficulty: "Comfort",
    tags: ["Vegetarian", "Dinner Party"],
    accent: "from-[#e6c089]/75 via-[#f8e9cc] to-white",
    description:
      "A glossy pan sauce with slow garlic, tomato paste, saffron threads, and clouds of parmesan.",
  },
  {
    id: 3,
    title: "Coconut Cardamom French Toast",
    author: "Nadia Wells",
    time: "20 min",
    difficulty: "Brunch",
    tags: ["Sweet", "Make-ahead"],
    accent: "from-blush/80 via-[#faeee9] to-white",
    description:
      "Custardy slices finished with toasted coconut, cardamom sugar, and a tart berry spoon jam.",
  },
];

export const seasonalCollections = [
  {
    title: "Spring market suppers",
    count: "18 recipes",
    blurb: "Snap peas, grilled lemon, tender greens, and shareable mains for longer evenings.",
  },
  {
    title: "Small-batch baking",
    count: "12 recipes",
    blurb: "Brown butter cookies, one-pan cakes, and cozy loaves sized for calm weekends.",
  },
  {
    title: "Host-worthy salads",
    count: "09 recipes",
    blurb: "Big texture, layered dressings, and the sort of bowls people ask about twice.",
  },
];

export const communityNotes = [
  {
    name: "Ari",
    role: "Fermentation fan",
    quote:
      "The step cards are absurdly useful. I can glance down once and get back to the stove.",
  },
  {
    name: "Leena",
    role: "Sunday baker",
    quote:
      "It feels curated without being fussy. I actually want to linger and read what people are making.",
  },
  {
    name: "Jonah",
    role: "Home cook club host",
    quote:
      "We started using the share prompts for our potluck nights and it turned into a real ritual.",
  },
];

export const recipeLibrary = [
  {
    title: "Roasted Pepper Shakshuka Toasts",
    category: "Breakfast",
    time: "25 min",
    servings: "2 servings",
    rating: "4.9",
    summary: "Jammy eggs, spiced peppers, and thick toast for the kind of breakfast that becomes lunch.",
  },
  {
    title: "Miso Butter Mushroom Hand Pies",
    category: "Bake",
    time: "1 hr",
    servings: "6 hand pies",
    rating: "4.8",
    summary: "Golden pastry with earthy mushrooms and a deeply savory filling that travels beautifully.",
  },
  {
    title: "Tamarind Chickpea Crunch Salad",
    category: "Salad",
    time: "18 min",
    servings: "4 servings",
    rating: "5.0",
    summary: "A sharp-sweet dressing with herbs, cucumbers, crispy chickpeas, and toasted seeds.",
  },
  {
    title: "Burnt Honey Apricot Tart",
    category: "Dessert",
    time: "55 min",
    servings: "8 slices",
    rating: "4.7",
    summary: "Sticky honey glaze, almond cream, and apricots that slump into the crust just enough.",
  },
  {
    title: "Smoked Chili Corn Chowder",
    category: "Soup",
    time: "35 min",
    servings: "5 bowls",
    rating: "4.9",
    summary: "Creamy but lively, with sweet corn, potatoes, lime, and a smoky finish.",
  },
  {
    title: "Lemon Olive Oil Snack Cake",
    category: "Cake",
    time: "45 min",
    servings: "9 squares",
    rating: "4.8",
    summary: "Soft crumb, bright citrus, and enough glaze to make the edges shine.",
  },
];

export const sharePrompts = [
  "Tell the story behind this dish and why it matters at your table.",
  "Add one tiny trick that makes the recipe more forgiving for beginners.",
  "Suggest a swap for pantry cooks and a flourish for dinner-party cooks.",
];

export const pageArt = {
  heroArt,
  gatherArt,
  patternTile,
};
