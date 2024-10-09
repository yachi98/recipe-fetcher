import "./App.css";
import { useState, useEffect } from "react";
import "./index.css";
import Card from "./components/Card";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeToDisplay, setRecipeToDisplay] = useState(null);
  const [showDropDown, setShowDrop] = useState(false);
  const [error, setError] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          await navigator.serviceWorker.register("/sw.js", { scope: "./" });
        } catch (error) {
          setError(true);
        }
      }
    };
    registerServiceWorker();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/recipes?select=name"
        );
        const data = await response.json();
        setError(false);
        setRecipes(data.recipes);
      } catch (error) {
        setError(true);
      }
    };
    fetchRecipes();
  }, []);

  const fetchRecipeDetails = async (id) => {
    const request = `https://dummyjson.com/recipes/${id}`;
    try {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        const data = await cachedResponse.json();
        setRecipeToDisplay(data);
      } else {
        const response = await fetch(request);
        const data = await response.json();
        setRecipeToDisplay(data);
      }
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const toggleDropDown = () => {
    setShowDrop(!showDropDown);
  };

  return (
    <div className="flex p-4 justify-center gap-8">
      <div>
        <button
          className="bg-black text-white py-2 px-4 rounded-xl"
          onClick={toggleDropDown}
        >
          {showDropDown ? "Hide Recipes" : "Show Recipes"}
        </button>
        {showDropDown && (
          <ul className="w-[250px] max-h-[300px] overflow-y-auto border rounded-xl shadow-md px-4 py-4 mt-2">
            {recipes.map((recipe, idx) => (
              <li
                value={recipe.id}
                className={` mb-2 rounded-xl cursor-pointer p-2 transition-transform duration-200 transform ${
                  hoveredIndex === idx
                    ? "bg-black text-white scale-105"
                    : "bg-transparent text-black"
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => fetchRecipeDetails(recipe.id)}
                key={idx}
              >
                {recipe.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <p>error loading</p>}
      <div>{recipeToDisplay && <Card {...recipeToDisplay} />}</div>
    </div>
  );
}

export default App;






