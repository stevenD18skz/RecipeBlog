export const recipes = [
  {
    id: 1,
    name: "Tarta de Manzana",
    description: "Una tarta clásica española perfecta para acompañar con café.",
    preparation_time: "30 minutos",
    cooking_time: "45 minutos",
    resting_time: "15 minutos",
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
      {
        step: 1,
        instruction:
          "Precalienta el horno a 180°C y engrasa un molde para tartas.",
        image:
          "https://i.pinimg.com/736x/be/ba/ba/bebaba2a0d2b2399e16b3990805f654c.jpg",
      },
      {
        step: 2,
        instruction: "Mezcla la harina y el azúcar en un tazón grande.",
        image:
          "https://i.pinimg.com/736x/69/55/5d/69555d5d3921a7219df6c0a23dc34b45.jpg",
      },
      {
        step: 3,
        instruction:
          "Añade la mantequilla y mezcla hasta formar una masa homogénea.",
        image:
          "https://i.pinimg.com/736x/c3/cf/de/c3cfde168288f6cc59f573e180106445.jpg",
      },
      {
        step: 4,
        instruction:
          "Coloca la masa en el molde y distribuye las manzanas peladas y cortadas encima.",
        image:
          "https://i.pinimg.com/736x/0e/1c/d7/0e1cd789d9d73d4bed72f89a2f7e89b1.jpg",
      },
      {
        step: 5,
        instruction: "Hornea durante 45 minutos o hasta que esté dorado.",
        image:
          "https://i.pinimg.com/736x/1d/27/f0/1d27f0250267b28d59fed9714309d398.jpg",
      },
    ],
    nutrition: {
      calories: 250,
      protein: "3g",
      fat: "12g",
      carbs: "34g",
    },
    tags: ["tarta", "manzana", "postre clásico"],
    notes: "Puedes usar azúcar moreno para un sabor más intenso.",
    related_recipes: [2, 3],
    image:
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?auto=format&fit=crop&q=80&w=800",
  },

  {
    id: 2,
    name: "Pasta Carbonara",
    description: "Un plato clásico italiano rápido y delicioso.",
    preparation_time: "15 minutos",
    cooking_time: "15 minutos",
    resting_time: "0 minutos",
    servings: 4,
    category: "main",
    cuisine: "italian",
    difficulty: "Fácil",
    ingredients: ["Espaguetis", "Huevos", "Queso pecorino", "Panceta"],
    steps: [
      {
        step: 1,
        instruction: "Cocina la pasta al dente en agua con sal.",
        image: "https://example.com/carbonara-step1.jpg",
      },
      {
        step: 2,
        instruction: "Prepara la mezcla de huevos y queso pecorino.",
        image: "https://example.com/carbonara-step2.jpg",
      },
      {
        step: 3,
        instruction:
          "Añade la panceta crujiente y mezcla todo con la pasta caliente.",
        image: "https://example.com/carbonara-step3.jpg",
      },
    ],
    nutrition: {
      calories: 400,
      protein: "15g",
      fat: "18g",
      carbs: "45g",
    },
    tags: ["pasta", "rápido", "italiano"],
    notes: "Evita añadir nata, la auténtica carbonara no la lleva.",
    related_recipes: [3, 4],
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Tacos al Pastor",
    description: "Tacos mexicanos con carne marinada y un toque de piña.",
    preparation_time: "40 minutos",
    cooking_time: "2 horas",
    resting_time: "0 minutos",
    servings: 6,
    category: "main",
    cuisine: "mexican",
    difficulty: "Avanzado",
    ingredients: ["Carne de cerdo", "Chiles", "Piña", "Tortillas"],
    steps: [
      {
        step: 1,
        instruction: "Marina la carne con los chiles y especias.",
        image: "https://example.com/tacos-step1.jpg",
      },
      {
        step: 2,
        instruction: "Cocina lentamente la carne marinada.",
        image: "https://example.com/tacos-step2.jpg",
      },
      {
        step: 3,
        instruction: "Asa ligeramente las tortillas y sirve con piña.",
        image: "https://example.com/tacos-step3.jpg",
      },
    ],
    nutrition: {
      calories: 450,
      protein: "25g",
      fat: "18g",
      carbs: "40g",
    },
    tags: ["tacos", "mexicano", "tradicional"],
    notes: "Usa tortillas de maíz para un sabor más auténtico.",
    related_recipes: [1, 2],
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Sushi",
    description: "Una delicia japonesa para disfrutar en casa.",
    preparation_time: "1 hora",
    cooking_time: "20 minutos",
    resting_time: "10 minutos",
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
      {
        step: 1,
        instruction: "Cocina el arroz para sushi y añade el vinagre de arroz.",
        image:
          "https://i.pinimg.com/736x/e6/b6/38/e6b638870b04b383e366d18ffafca9f0.jpg",
      },
      {
        step: 2,
        instruction: "Prepara el pescado crudo cortándolo en tiras finas.",
        image:
          "https://i.pinimg.com/736x/b2/1f/33/b21f331ddaef45e8fd077565d70c3fc2.jpg",
      },
      {
        step: 3,
        instruction:
          "Coloca el arroz y los ingredientes en el alga nori y enrolla.",
        image:
          "https://i.pinimg.com/736x/79/28/84/79288433c2d3fcf52718ea1d5719ea82.jpg",
      },
      {
        step: 4,
        instruction: "Corta el rollo en piezas pequeñas y sirve.",
        image:
          "https://i.pinimg.com/736x/2e/52/8b/2e528b2f6dad0e6b9cf63a0419e1a51b.jpg",
      },
    ],
    nutrition: {
      calories: 350,
      protein: "12g",
      fat: "5g",
      carbs: "60g",
    },
    tags: ["sushi", "japonés", "arroz"],
    notes: "Usa pescado fresco de alta calidad para un mejor resultado.",
    related_recipes: [5, 6],
    image:
      "https://i.pinimg.com/736x/ae/32/6e/ae326ee3a6a4295cb6da33382eea915f.jpg",
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
