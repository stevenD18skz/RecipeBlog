export const recipes = [
  {
    id: 1,
    name: "Tarta de Manzana",
    preparation_time: "30 minutos",
    cooking_time: "45 minutos",
    servings: 4,
    category: "dessert",
    cuisine: "spanish",
    difficulty: "Intermedio",
    ingredients: [
      "2 tazas de harina",
      "1 taza de azúcar",
      "1/2 taza de mantequilla",
      "4 manzanas",
    ],
    steps: [
      "Precalienta el horno a 180°C",
      "Mezcla la harina y el azúcar",
      "Añade la mantequilla",
      "Hornea",
    ],
    related_recipes: [2, 3],
    image:
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Pasta Carbonara",
    preparation_time: "15 minutos",
    cooking_time: "15 minutos",
    servings: 4,
    category: "main",
    cuisine: "italian",
    difficulty: "Fácil",
    ingredients: ["Espaguetis", "Huevos", "Queso pecorino", "Panceta"],
    steps: ["Cocina la pasta", "Prepara la salsa", "Mezcla todo"],
    related_recipes: [3, 4],
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Tacos al Pastor",
    preparation_time: "40 minutos",
    cooking_time: "2 horas",
    servings: 6,
    category: "main",
    cuisine: "mexican",
    difficulty: "Avanzado",
    ingredients: ["Carne de cerdo", "Chiles", "Piña", "Tortillas"],
    steps: ["Marina la carne", "Prepara la salsa", "Cocina", "Sirve"],
    related_recipes: [1, 2],
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Sushi",
    preparation_time: "1 hora",
    cooking_time: "20 minutos",
    servings: 4,
    category: "main",
    cuisine: "japanese",
    difficulty: "Avanzado",
    ingredients: [
      "Arroz para sushi",
      "Alga nori",
      "Pescado crudo",
      "Vinagre de arroz",
    ],
    steps: [
      "Cocina el arroz",
      "Prepara el pescado",
      "Enrolla el sushi",
      "Corta y sirve",
    ],
    related_recipes: [5, 6],
    image:
      "https://i.pinimg.com/736x/ae/32/6e/ae326ee3a6a4295cb6da33382eea915f.jpg",
  },
  {
    id: 5,
    name: "Paella",
    preparation_time: "30 minutos",
    cooking_time: "1 hora",
    servings: 6,
    category: "main",
    cuisine: "spanish",
    difficulty: "Intermedio",
    ingredients: ["Arroz", "Mariscos", "Pollo", "Azafrán"],
    steps: [
      "Cocina el pollo",
      "Añade el arroz y el azafrán",
      "Añade los mariscos",
      "Cocina a fuego lento",
    ],
    related_recipes: [1, 6],
    image:
      "https://i.pinimg.com/736x/80/ac/a6/80aca6860f8e9c9a6cfcdf5927f4bf21.jpg",
  },
  {
    id: 6,
    name: "Hamburguesa",
    preparation_time: "20 minutos",
    cooking_time: "10 minutos",
    servings: 4,
    category: "main",
    cuisine: "american",
    difficulty: "Fácil",
    ingredients: [
      "Carne molida",
      "Pan de hamburguesa",
      "Queso",
      "Lechuga",
      "Tomate",
    ],
    steps: [
      "Forma las hamburguesas",
      "Cocina la carne",
      "Arma la hamburguesa",
      "Sirve",
    ],
    related_recipes: [2, 4],
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    name: "Ceviche",
    preparation_time: "20 minutos",
    cooking_time: "0 minutos",
    servings: 4,
    category: "appetizer",
    cuisine: "peruvian",
    difficulty: "Intermedio",
    ingredients: ["Pescado fresco", "Limón", "Cebolla", "Cilantro"],
    steps: [
      "Corta el pescado",
      "Marina con limón",
      "Añade cebolla y cilantro",
      "Sirve",
    ],
    related_recipes: [3, 5],
    image:
      "https://i.pinimg.com/736x/ae/62/fb/ae62fbd40af05dc24b2c3c65a09b984d.jpg",
  },
  {
    id: 8,
    name: "Ratatouille",
    preparation_time: "30 minutos",
    cooking_time: "1 hora",
    servings: 4,
    category: "main",
    cuisine: "french",
    difficulty: "Intermedio",
    ingredients: ["Berenjena", "Calabacín", "Pimiento", "Tomate"],
    steps: ["Corta las verduras", "Cocina a fuego lento", "Sirve"],
    related_recipes: [1, 7],
    image:
      "https://i.pinimg.com/736x/06/65/23/066523e3b07f1a6c4a107bd8516057c6.jpg",
  },
  {
    id: 9,
    name: "Falafel",
    preparation_time: "15 minutos",
    cooking_time: "10 minutos",
    servings: 4,
    category: "main",
    cuisine: "middle eastern",
    difficulty: "Fácil",
    ingredients: ["Garbanzos", "Cebolla", "Ajo", "Perejil"],
    steps: ["Tritura los garbanzos", "Forma las bolitas", "Fríe", "Sirve"],
    related_recipes: [2, 8],
    image:
      "https://i.pinimg.com/736x/18/8c/2a/188c2a49ab3882225c28d93b8950862c.jpg",
  },
  {
    id: 10,
    name: "Pad Thai",
    preparation_time: "20 minutos",
    cooking_time: "10 minutos",
    servings: 4,
    category: "main",
    cuisine: "thai",
    difficulty: "Intermedio",
    ingredients: ["Fideos de arroz", "Camarones", "Tofu", "Salsa de tamarindo"],
    steps: [
      "Cocina los fideos",
      "Prepara la salsa",
      "Saltea los ingredientes",
      "Mezcla todo",
    ],
    related_recipes: [3, 9],
    image:
      "https://i.pinimg.com/736x/ba/25/52/ba2552b4830221c37fc4ba8c1217d245.jpg",
  },
  {
    id: 11,
    name: "Gazpacho",
    preparation_time: "15 minutos",
    cooking_time: "0 minutos",
    servings: 4,
    category: "appetizer",
    cuisine: "spanish",
    difficulty: "Fácil",
    ingredients: ["Tomates", "Pepino", "Pimiento", "Ajo", "Aceite de oliva"],
    steps: ["Tritura todos los ingredientes", "Refrigera", "Sirve frío"],
    related_recipes: [1, 7],
    image:
      "https://i.pinimg.com/736x/e0/f2/f0/e0f2f0d4a19151f01c6d892c90ed4fae.jpg",
  },
  {
    id: 12,
    name: "Bruschetta",
    preparation_time: "10 minutos",
    cooking_time: "5 minutos",
    servings: 4,
    category: "appetizer",
    cuisine: "italian",
    difficulty: "Fácil",
    ingredients: ["Pan", "Tomates", "Ajo", "Albahaca", "Aceite de oliva"],
    steps: [
      "Tuesta el pan",
      "Frota con ajo",
      "Añade los tomates y la albahaca",
      "Rocía con aceite de oliva",
    ],
    related_recipes: [2, 8],
    image:
      "https://i.pinimg.com/736x/0a/92/8a/0a928a23c6c3fb861e9c4ec54ae78b7d.jpg",
  },
];

export const tips = [
  {
    id: 1,
    title: "Cómo Cortar Cebolla Sin Llorar",
    content:
      "Enfría la cebolla en el refrigerador antes de cortarla. Esto reduce la cantidad de compuestos sulfurados liberados, que son los que te hacen llorar.",
  },
  {
    id: 2,
    title: "Mantén las Hierbas Frescas",
    content:
      "Envuelve las hierbas frescas en una toalla de papel húmeda y guárdalas en una bolsa de plástico en el refrigerador. Esto las mantendrá frescas por más tiempo.",
  },
  {
    id: 3,
    title: "Cocina la Pasta al Dente",
    content:
      "Para una pasta perfectamente cocida, asegúrate de cocinarla hasta que esté al dente, es decir, con un poco de firmeza en el centro.",
  },
  {
    id: 4,
    title: "Evita que el Aguacate se Oxide",
    content:
      "Rocía jugo de limón sobre la superficie cortada del aguacate para evitar que se vuelva marrón rápidamente.",
  },
  {
    id: 5,
    title: "Usa Sal con Moderación",
    content:
      "Añade sal en pequeñas cantidades durante la cocción y ajusta al final para evitar que tus platos queden demasiado salados.",
  },
];

export const recentRecipes = [
  recipes[10], // Gazpacho
  recipes[11], // Bruschetta
  recipes[9], // Pad Thai
];

export const popularRecipes = [
  recipes[0], // Tarta de Manzana
  recipes[1], // Pasta Carbonara
  recipes[2], // Tacos al Pastor
  recipes[4], // Paella
  recipes[5], // Hamburguesa
];

export const recipeOfTheDay = recipes[3]; // Sushi
