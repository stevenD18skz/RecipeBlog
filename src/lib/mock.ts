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
  {
    id: 5,
    name: "Ramen Japonés",
    description: "Una sopa japonesa deliciosa y reconfortante.",
    preparation_time: "1 hora",
    cooking_time: "30 minutos",
    resting_time: "10 minutos",
    servings: 4,
    category: "main",
    cuisine: "japanese",
    difficulty: "Intermedia",
    ingredients: [
      "Fideos para ramen",
      "Caldo de pollo",
      "Salsa de soja",
      "Carne de cerdo",
      "Huevos",
      "Verduras variadas",
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cocina los fideos para ramen según las instrucciones del paquete.",
      },
      {
        step: 2,
        instruction: "Prepara el caldo de pollo y añádele salsa de soja.",
      },
      {
        step: 3,
        instruction: "Cocina la carne de cerdo y córtala en trozos finos.",
      },
      {
        step: 4,
        instruction: "Cocina los huevos y córtalos por la mitad.",
      },
      {
        step: 5,
        instruction:
          "Sirve los fideos en un tazón, añade el caldo, la carne de cerdo, los huevos y las verduras.",
      },
    ],
    nutrition: {
      calories: 450,
      protein: "20g",
      fat: "15g",
      carbs: "60g",
    },
    tags: ["ramen", "japonés", "sopa"],
    notes: "Ajusta la cantidad de salsa de soja a tu gusto.",
    related_recipes: [5, 6],
    image:
      "https://i.pinimg.com/736x/e8/40/d0/e840d0e51abed470d7e146ae1742e8df.jpg",
  },
  {
    id: 6,
    name: "Sashimi",
    description: "Un plato tradicional japonés de pescado crudo.",
    preparation_time: "20 minutos",
    cooking_time: "N/A",
    resting_time: "N/A",
    servings: 4,
    category: "starter",
    cuisine: "japanese",
    difficulty: "Avanzado",
    ingredients: [
      "Pescado fresco de alta calidad (atún, salmón, etc.)",
      "Salsa de soja",
      "Wasabi",
      "Jengibre encurtido",
    ],
    steps: [
      {
        step: 1,
        instruction: "Corta el pescado en tiras finas.",
      },
      {
        step: 2,
        instruction:
          "Sirve el pescado con salsa de soja, wasabi y jengibre encurtido.",
      },
    ],
    nutrition: {
      calories: 200,
      protein: "25g",
      fat: "5g",
      carbs: "2g",
    },
    tags: ["sashimi", "japonés", "pescado"],
    notes: "Usa el pescado más fresco posible para obtener mejores resultados.",
    related_recipes: [5, 6],
    image:
      "https://i.pinimg.com/736x/45/7c/cc/457ccce11cadaf08fdf88901ab78924a.jpg",
  },
  {
    id: 7,
    name: "Tempura",
    description: "Verduras y mariscos fritos en una masa ligera y crujiente.",
    preparation_time: "30 minutos",
    cooking_time: "20 minutos",
    resting_time: "5 minutos",
    servings: 4,
    category: "starter",
    cuisine: "japanese",
    difficulty: "Intermedia",
    ingredients: [
      "Harina para tempura",
      "Agua fría",
      "Verduras variadas (zanahorias, calabacín, etc.)",
      "Mariscos (camarones, calamares)",
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mezcla la harina para tempura con agua fría para hacer la masa.",
      },
      {
        step: 2,
        instruction: "Sumerge las verduras y los mariscos en la masa.",
      },
      {
        step: 3,
        instruction:
          "Fríe en aceite caliente hasta que estén dorados y crujientes.",
      },
      {
        step: 4,
        instruction: "Escurre en papel absorbente y sirve caliente.",
      },
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      fat: "15g",
      carbs: "30g",
    },
    tags: ["tempura", "japonés", "frito"],
    notes: "Usa agua muy fría para una masa más crujiente.",
    related_recipes: [5, 6],
    image:
      "https://i.pinimg.com/736x/7d/33/5b/7d335bc8cbccd1cc7719d8cc66c2ac15.jpg",
  },
  {
    id: 8,
    name: "Gyozas",
    description: "Empanadillas japonesas rellenas de carne y verduras.",
    preparation_time: "1 hora",
    cooking_time: "15 minutos",
    resting_time: "10 minutos",
    servings: 4,
    category: "starter",
    cuisine: "japanese",
    difficulty: "Intermedia",
    ingredients: ["Masa para gyozas", "Carne picada", "Col", "Ajo y jengibre"],
    steps: [
      {
        step: 1,
        instruction:
          "Prepara el relleno mezclando la carne picada, la col picada, el ajo y el jengibre.",
      },
      {
        step: 2,
        instruction: "Rellena las gyozas con la mezcla.",
      },
      {
        step: 3,
        instruction:
          "Cocina las gyozas al vapor y luego fríelas hasta que estén doradas.",
      },
    ],
    nutrition: {
      calories: 250,
      protein: "15g",
      fat: "10g",
      carbs: "25g",
    },
    tags: ["gyozas", "japonés", "empanadillas"],
    notes: "Acompaña con salsa de soja para mojar.",
    related_recipes: [5, 6],
    image:
      "https://i.pinimg.com/736x/ce/b5/20/ceb5207136b80833023b03a9837b0a80.jpg",
  },
  {
    id: 9,
    name: "Yakisoba",
    description: "Fideos fritos japoneses con verduras y carne.",
    preparation_time: "30 minutos",
    cooking_time: "20 minutos",
    resting_time: "N/A",
    servings: 4,
    category: "main",
    cuisine: "japanese",
    difficulty: "Fácil",
    ingredients: [
      "Fideos para yakisoba",
      "Verduras variadas (zanahorias, pimientos, etc.)",
      "Carne de cerdo",
      "Salsa yakisoba",
    ],
    steps: [
      {
        step: 1,
        instruction: "Cocina los fideos según las instrucciones del paquete.",
      },
      {
        step: 2,
        instruction: "Saltea las verduras y la carne.",
      },
      {
        step: 3,
        instruction:
          "Añade los fideos y la salsa yakisoba, mezcla bien y cocina hasta que estén bien combinados.",
      },
    ],
    nutrition: {
      calories: 400,
      protein: "18g",
      fat: "10g",
      carbs: "60g",
    },
    tags: ["yakisoba", "japonés", "fideos"],
    notes: "Ajusta las verduras y la carne a tu gusto.",
    related_recipes: [5, 6],
    image:
      "https://i.pinimg.com/736x/db/dd/e3/dbdde3498518c11af035d374807eca41.jpg",
  },
  {
    id: 10,
    name: "Teriyaki de Pollo",
    description: "Pollo glaseado con una deliciosa salsa teriyaki.",
    preparation_time: "1 hora",
    cooking_time: "30 minutos",
    resting_time: "N/A",
    servings: 4,
    category: "main",
    cuisine: "japanese",
    difficulty: "Fácil",
    ingredients: ["Pechugas de pollo", "Salsa teriyaki", "Arroz blanco"],
    steps: [
      {
        step: 1,
        instruction:
          "Marina el pollo en salsa teriyaki durante al menos 30 minutos.",
      },
      {
        step: 2,
        instruction: "Cocina el pollo a la parrilla o en una sartén.",
      },
      {
        step: 3,
        instruction:
          "Sirve el pollo con arroz blanco y un poco más de salsa teriyaki.",
      },
    ],
    nutrition: {
      calories: 450,
      protein: "25g",
      fat: "12g",
      carbs: "60g",
    },
    tags: ["teriyaki", "japonés", "pollo"],
    notes: "Añade sésamo tostado por encima para un toque extra.",
    related_recipes: [5, 6],
    image:
      "https://i.pinimg.com/736x/68/db/6a/68db6af0420898bc8f251a11a0afd2fd.jpg",
  },
  {
    id: 11,
    name: "Ensalada César",
    description:
      "Un clásico de la cocina saludable, ideal para cualquier ocasión.",
    preparation_time: "20 minutos",
    cooking_time: "10 minutos",
    resting_time: "0 minutos",
    servings: 2,
    category: "side",
    cuisine: "italian",
    difficulty: "Fácil",
    ingredients: [
      "Lechuga romana",
      "Pechuga de pollo",
      "Queso parmesano",
      "Crutones",
      "Aderezo César",
    ],
    steps: [
      {
        step: 1,
        instruction: "Lava y corta la lechuga romana.",
        image:
          "https://i.pinimg.com/736x/f3/45/89/f34589e4b8ed5a0a6e4cb9bbeb7b1f0d.jpg",
      },
      {
        step: 2,
        instruction: "Cocina la pechuga de pollo y córtala en tiras.",
        image:
          "https://i.pinimg.com/736x/c6/12/f9/c612f92b418f20e4d6cc7e872c0c9dbb.jpg",
      },
      {
        step: 3,
        instruction: "Mezcla la lechuga, el pollo, los crutones y el queso.",
        image:
          "https://i.pinimg.com/736x/9a/b1/82/9ab1825b22116d9f5d9397168db8cc83.jpg",
      },
      {
        step: 4,
        instruction: "Añade el aderezo César al gusto y sirve.",
        image:
          "https://i.pinimg.com/736x/3d/84/56/3d84568e8be30578a679293ad2f7388d.jpg",
      },
    ],
    nutrition: {
      calories: 400,
      protein: "30g",
      fat: "20g",
      carbs: "15g",
    },
    tags: ["ensalada", "italiano", "saludable"],
    notes: "Puedes añadir anchoas al aderezo para un sabor más auténtico.",
    related_recipes: [4, 6],
    image:
      "https://i.pinimg.com/736x/29/c3/ae/29c3ae0d4f8b8a907605880e678710cc.jpg",
  },
  {
    id: 12,
    name: "Hamburguesa Clásica",
    description: "Una hamburguesa básica pero deliciosa.",
    preparation_time: "15 minutos",
    cooking_time: "10 minutos",
    resting_time: "5 minutos",
    servings: 1,
    category: "main",
    cuisine: "american",
    difficulty: "Fácil",
    ingredients: [
      "Pan para hamburguesa",
      "Carne molida",
      "Queso cheddar",
      "Lechuga",
      "Tomate",
      "Cebolla",
      "Salsa ketchup",
    ],
    steps: [
      {
        step: 1,
        instruction: "Forma una hamburguesa con la carne molida.",
        image:
          "https://i.pinimg.com/736x/2d/56/3a/2d563a5a9a3a9d019e3db163d1b13dc3.jpg",
      },
      {
        step: 2,
        instruction: "Cocina la hamburguesa en una sartén hasta dorar.",
        image:
          "https://i.pinimg.com/736x/a3/78/4f/a3784ff184872b041c4e95e28dd258a1.jpg",
      },
      {
        step: 3,
        instruction: "Arma la hamburguesa con el pan, lechuga, tomate y queso.",
        image:
          "https://i.pinimg.com/736x/81/6f/62/816f62a347c539bc75f2b3033dbcf1b5.jpg",
      },
      {
        step: 4,
        instruction: "Añade ketchup al gusto y sirve.",
        image:
          "https://i.pinimg.com/736x/d2/15/1c/d2151c4a5f098d9b49b949b6a195b7be.jpg",
      },
    ],
    nutrition: {
      calories: 650,
      protein: "30g",
      fat: "40g",
      carbs: "45g",
    },
    tags: ["hamburguesa", "americano", "rápido"],
    notes: "Prueba tostar ligeramente el pan para un mejor sabor.",
    related_recipes: [5, 7],
    image:
      "https://i.pinimg.com/736x/13/1f/fe/131ffe17fbaca82da95dd14dff884e17.jpg",
  },
  {
    id: 13,
    name: "Ratatouille",
    description: "Un plato vegetariano francés lleno de sabor y colores.",
    preparation_time: "30 minutos",
    cooking_time: "40 minutos",
    resting_time: "5 minutos",
    servings: 4,
    category: "main",
    cuisine: "french",
    difficulty: "Intermedio",
    ingredients: [
      "Berenjena",
      "Calabacín",
      "Tomate",
      "Pimiento rojo",
      "Cebolla",
      "Aceite de oliva",
      "Hierbas provenzales",
    ],
    steps: [
      {
        step: 1,
        instruction: "Corta las verduras en rodajas finas.",
        image:
          "https://i.pinimg.com/736x/63/48/82/6348827653c0c5d0a482d8b50d116f3f.jpg",
      },
      {
        step: 2,
        instruction:
          "Precalienta el horno y engrasa un molde con aceite de oliva.",
        image:
          "https://i.pinimg.com/736x/1e/b9/fc/1eb9fc911f897158e3acdd059e8c44d1.jpg",
      },
      {
        step: 3,
        instruction:
          "Acomoda las verduras en capas y añade hierbas provenzales.",
        image:
          "https://i.pinimg.com/736x/ae/32/6e/ae326ee3a6a4295cb6da33382eea915f.jpg",
      },
      {
        step: 4,
        instruction:
          "Hornea por 40 minutos hasta que las verduras estén tiernas.",
        image:
          "https://i.pinimg.com/736x/92/34/4f/92344fefc24864643e84e0dfb2db3cc9.jpg",
      },
    ],
    nutrition: {
      calories: 150,
      protein: "3g",
      fat: "10g",
      carbs: "12g",
    },
    tags: ["ratatouille", "francés", "vegetariano"],
    notes: "Sirve con pan tostado para un plato completo.",
    related_recipes: [8, 9],
    image:
      "https://i.pinimg.com/736x/06/65/23/066523e3b07f1a6c4a107bd8516057c6.jpg",
  },
  {
    id: 14,
    name: "Paella de Mariscos",
    description: "Un plato español lleno de tradición y sabor.",
    preparation_time: "30 minutos",
    cooking_time: "45 minutos",
    resting_time: "5 minutos",
    servings: 4,
    category: "main",
    cuisine: "spanish",
    difficulty: "Avanzado",
    ingredients: [
      "Arroz",
      "Calamares",
      "Mejillones",
      "Gambas",
      "Pimiento rojo",
      "Azafrán",
      "Caldo de pescado",
    ],
    steps: [
      {
        step: 1,
        instruction: "Sofríe el pimiento y los calamares en una paellera.",
        image:
          "https://i.pinimg.com/736x/6c/34/2a/6c342af5e4d5bc7d684e1de16e50de2c.jpg",
      },
      {
        step: 2,
        instruction: "Añade el arroz y mezcla con el sofrito.",
        image:
          "https://i.pinimg.com/736x/7c/8e/9f/7c8e9fcb35e59c7799d90bb604cb74f4.jpg",
      },
      {
        step: 3,
        instruction: "Vierte el caldo caliente y el azafrán, y deja cocinar.",
        image:
          "https://i.pinimg.com/736x/88/98/7a/88987a53e1ed90891c30e9472e682ead.jpg",
      },
      {
        step: 4,
        instruction:
          "Añade las gambas y los mejillones al final y cocina 10 minutos más.",
        image:
          "https://i.pinimg.com/736x/22/77/d1/2277d179a1fbf84aa93fd5a1a6c14e37.jpg",
      },
    ],
    nutrition: {
      calories: 450,
      protein: "25g",
      fat: "12g",
      carbs: "55g",
    },
    tags: ["paella", "español", "mariscos"],
    notes:
      "No mezcles el arroz una vez añadido el caldo para que se forme la costra típica.",
    related_recipes: [7, 9],
    image:
      "https://i.pinimg.com/736x/22/77/d1/2277d179a1fbf84aa93fd5a1a6c14e37.jpg",
  },
  {
    id: 15,
    name: "Brownies de Chocolate",
    description: "Un postre clásico para los amantes del chocolate.",
    preparation_time: "15 minutos",
    cooking_time: "25 minutos",
    resting_time: "10 minutos",
    servings: 6,
    category: "dessert",
    cuisine: "american",
    difficulty: "Fácil",
    ingredients: [
      "Chocolate oscuro",
      "Mantequilla",
      "Azúcar",
      "Huevos",
      "Harina",
      "Nueces",
    ],
    steps: [
      {
        step: 1,
        instruction: "Derrite el chocolate con la mantequilla.",
        image:
          "https://i.pinimg.com/736x/5d/15/a9/5d15a9f34c2ec28cd325897bdc8d080c.jpg",
      },
      {
        step: 2,
        instruction: "Añade el azúcar y los huevos, mezclando bien.",
        image:
          "https://i.pinimg.com/736x/25/8a/d4/258ad4d5b9fd90912dd74dc3b671418f.jpg",
      },
      {
        step: 3,
        instruction: "Incorpora la harina y las nueces.",
        image:
          "https://i.pinimg.com/736x/69/92/91/6992911de76492b9f4e1c4b74b5ed4e7.jpg",
      },
      {
        step: 4,
        instruction: "Hornea a 180°C por 25 minutos.",
        image:
          "https://i.pinimg.com/736x/1a/6d/57/1a6d57bd881d8f86deba9276e888cd9f.jpg",
      },
    ],
    nutrition: {
      calories: 320,
      protein: "5g",
      fat: "18g",
      carbs: "35g",
    },
    tags: ["brownies", "chocolate", "postre"],
    notes: "Deja enfriar antes de cortar para obtener piezas más limpias.",
    related_recipes: [8, 10],
    image:
      "https://i.pinimg.com/736x/81/f5/6b/81f56b4e1ec0b3d0d129e03be8470b33.jpg",
  },
  {
    id: 16,
    name: "Crema de Calabaza",
    description: "Un plato reconfortante ideal para días fríos.",
    preparation_time: "10 minutos",
    cooking_time: "25 minutos",
    resting_time: "5 minutos",
    servings: 4,
    category: "soup",
    cuisine: "international",
    difficulty: "Fácil",
    ingredients: [
      "Calabaza",
      "Cebolla",
      "Ajo",
      "Caldo de vegetales",
      "Crema líquida",
    ],
    steps: [
      {
        step: 1,
        instruction: "Corta la calabaza, la cebolla y el ajo.",
        image:
          "https://i.pinimg.com/736x/91/6f/4b/916f4b9f8bd08f857d71b70ebf55e2ab.jpg",
      },
      {
        step: 2,
        instruction: "Sofríe la cebolla y el ajo en una olla.",
        image:
          "https://i.pinimg.com/736x/c6/74/3d/c6743db5f7588ab9b26c605158b33d55.jpg",
      },
      {
        step: 3,
        instruction:
          "Añade la calabaza y el caldo, y cocina hasta que esté tierna.",
        image:
          "https://i.pinimg.com/736x/f4/90/23/f49023ec5dd3f97a6d121d961ce1c1da.jpg",
      },
      {
        step: 4,
        instruction: "Licúa la mezcla y añade la crema al final.",
        image:
          "https://i.pinimg.com/736x/3c/60/ba/3c60ba28c2c0ab3b8e9bc40c32d2852c.jpg",
      },
    ],
    nutrition: {
      calories: 180,
      protein: "3g",
      fat: "9g",
      carbs: "20g",
    },
    tags: ["crema", "calabaza", "sopa"],
    notes: "Sirve con semillas de calabaza tostadas para decorar.",
    related_recipes: [7, 9],
    image:
      "https://i.pinimg.com/736x/14/c7/fa/14c7fad17205bbc2a3339e95d81035b6.jpg",
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
