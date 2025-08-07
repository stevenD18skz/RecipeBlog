import React, { useState } from "react";

import { recipes } from "../../lib/mock";

const categories = [
  { id: "all", name: "Todas" },
  { id: "main", name: "Platos Principales" },
  { id: "dessert", name: "Postres" },
  { id: "appetizer", name: "Entrantes" },
  { id: "soup", name: "Sopas" },
];

const cuisines = [
  { id: "all", name: "Todas" },
  { id: "italian", name: "Italiana" },
  { id: "spanish", name: "Española" },
  { id: "mexican", name: "Mexicana" },
  { id: "asian", name: "Asiática" },
];

const difficulties = [
  { id: "all", name: "Todas" },
  { id: "Fácil", name: "Fácil" },
  { id: "Intermedio", name: "Intermedio" },
  { id: "Avanzado", name: "Avanzado" },
];

const times = [
  { id: "all", name: "Todos" },
  { id: "30", name: "< 30 min" },
  { id: "60", name: "< 1 hora" },
  { id: "120", name: "< 2 horas" },
];

const FilterButton = ({ selected, onClick, children }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm transition-colors ${
      selected
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default function RecipeCategories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");

  const [isExpanded, setIsExpanded] = useState(false);

  const hasActiveFilters =
    selectedCategory || selectedCuisine || selectedTime || selectedDifficulty;

  const getSelectedName = (options, selectedId) => {
    if (!selectedId) return null;
    return options.find((option) => option.id === selectedId)?.name;
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const categoryMatch =
      selectedCategory === "all" || recipe.category === selectedCategory;
    const cuisineMatch =
      selectedCuisine === "all" || recipe.cuisine === selectedCuisine;
    const difficultyMatch =
      selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty;
    const timeMatch =
      selectedTime === "all" ||
      (selectedTime === "30" && parseInt(recipe.cooking_time) <= 30) ||
      (selectedTime === "60" && parseInt(recipe.cooking_time) <= 60) ||
      (selectedTime === "120" && parseInt(recipe.cooking_time) <= 120);

    return categoryMatch && cuisineMatch && difficultyMatch && timeMatch;
  });

  return (
    <div className="container mx-auto  px-4 sm:px-6 py-12">
      <div className="bg-white rounded-2xl shadow-lg">
        <button
          className="w-full px-6 py-4 flex items-center justify-between text-left"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-gray-800">
              Filtrar Recetas
            </h3>
            {!isExpanded && hasActiveFilters && (
              <div className="flex flex-wrap gap-2 ml-4">
                {selectedCategory &&
                  getSelectedName(categories, selectedCategory) !== "Todas" && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {getSelectedName(categories, selectedCategory)}
                    </span>
                  )}
                {selectedCuisine &&
                  getSelectedName(cuisines, selectedCuisine) !== "Todas" && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {getSelectedName(cuisines, selectedCuisine)}
                    </span>
                  )}
                {selectedTime &&
                  getSelectedName(times, selectedTime) !== "Todas" && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {getSelectedName(times, selectedTime)}
                    </span>
                  )}
                {selectedDifficulty &&
                  getSelectedName(difficulties, selectedDifficulty) !==
                    "Todas" && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {getSelectedName(difficulties, selectedDifficulty)}
                    </span>
                  )}
              </div>
            )}
          </div>
          {isExpanded ? <p>-+</p> : <p>+-</p>}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 space-y-6">
            {/* Categories */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                Categorías
              </h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <FilterButton
                    key={category.id}
                    selected={selectedCategory === category.id}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Cuisines */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                <div className="flex items-center gap-2">
                  GlobeIcon
                  <span>Cocina</span>
                </div>
              </h4>
              <div className="flex flex-wrap gap-2">
                {cuisines.map((cuisine) => (
                  <FilterButton
                    key={cuisine.id}
                    selected={selectedCuisine === cuisine.id}
                    onClick={() => setSelectedCuisine(cuisine.id)}
                  >
                    {cuisine.name}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Time */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                <div className="flex items-center gap-2">
                  ClockIcon
                  <span>Tiempo de Preparación</span>
                </div>
              </h4>
              <div className="flex flex-wrap gap-2">
                {times.map((time) => (
                  <FilterButton
                    key={time.id}
                    selected={selectedTime === time.id}
                    onClick={() => setSelectedTime(time.id)}
                  >
                    {time.name}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                Dificultad
              </h4>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <FilterButton
                    key={difficulty.id}
                    selected={selectedDifficulty === difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                  >
                    {difficulty.name}
                  </FilterButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800 my-6">
            Recetas Encontradas {filteredRecipes.length}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredRecipes.map((recipe) => (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {recipe.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">
                      Prep: {recipe.preparation_time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">
                      Cocción: {recipe.cooking_time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">
                      {recipe.servings} porciones
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No se encontraron recetas con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
