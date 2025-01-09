export const recipes = [
  {
    id: 1,
    name: "Tarta de Manzana",
    preparation_time: "30 minutos",
    cooking_time: "45 minutos",
    servings: 4,
    ingredients: [
      "2 tazas de harina",
      "1 taza de azúcar",
      "1/2 taza de mantequilla",
      "4 manzanas",
    ],
    image:
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?auto=format&fit=crop&q=80&w=800",
    steps: [
      "Precalienta el horno a 180°C.",
      "Mezcla la harina y el azúcar en un bol grande.",
      "Añade la mantequilla y mezcla hasta que la masa esté homogénea.",
      "Coloca las manzanas cortadas en la masa y hornea por 45 minutos.",
    ],
    related_recipes: [2, 3],
  },
  {
    id: 2,
    name: "Ensalada César",
    preparation_time: "15 minutos",
    cooking_time: "0 minutos",
    servings: 2,
    ingredients: [
      "1 lechuga romana",
      "1/2 taza de crutones",
      "1/4 taza de queso parmesano",
      "Salsa César",
    ],
    image:
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?auto=format&fit=crop&q=80&w=800",
    steps: [
      "Lava y corta la lechuga.",
      "Añade los crutones y el queso parmesano.",
      "Mezcla con la salsa César y sirve.",
    ],
    related_recipes: [1, 3],
  },
  {
    id: 3,
    name: "Pizza Margherita",
    preparation_time: "20 minutos",
    cooking_time: "15 minutos",
    servings: 2,
    ingredients: [
      "Masa de pizza",
      "1/2 taza de salsa de tomate",
      "200g de mozzarella",
      "Hojas de albahaca fresca",
    ],
    image:
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?auto=format&fit=crop&q=80&w=800",
    steps: [
      "Precalienta el horno a 220°C.",
      "Extiende la masa y añade la salsa de tomate.",
      "Coloca la mozzarella y hornea por 15 minutos.",
      "Añade las hojas de albahaca antes de servir.",
    ],
    related_recipes: [1, 2],
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
