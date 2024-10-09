import './App.css';
import {useState, useEffect} from 'react';
import './index.css'; 
import Card from './components/Card';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeToDisplay, setRecipeToDisplay] = useState(null);
  const [showDropDown, setShowDrop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register("/sw.js", {scope: "./"});
          console.log('Service worker registered');
        } catch (error) {
          console.error(`Service worker registration failed: ${error}`);
        }
      }
    };
    registerServiceWorker();
  }, []);

useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipes?select=name');
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  fetchRecipes();
}, []);


const fetchRecipeDetails = async (id) => {
    const request = `https://dummyjson.com/recipes/${id}`;
    try {
      // Check cache first
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        const data = await cachedResponse.json();
        setRecipeToDisplay(data); 
        console.log(data);
      } else {
        // Fetch from API if not in cache
        const response = await fetch(request);
        const data = await response.json();
        setRecipeToDisplay(data);
      }
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  const toggleDropDown = () => {
    setShowDrop(!showDropDown);
  };

  return (
    <>
      <div className="flex p-4">
        <div>
          <button className="bg-black text-white py-2 px-4 rounded-xl" onClick={toggleDropDown}>
            {showDropDown ? 'Hide Recipes' : 'Show Recipes'}
          </button>
          {showDropDown && (
            <ul onClick={(e) => fetchRecipeDetails(e.target.value)}>
              {recipes.map((recipe, idx) => (
                <li
                  value={recipe.id}
                  className={`rounded-xl cursor-pointer p-2 transition-colors ${hoveredIndex === idx ? 'bg-black text-white' : 'bg-transparent text-black'}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={idx}
                >
                  {recipe.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          {recipeToDisplay && <Card {...recipeToDisplay} />}
        </div>
      </div>
    </>
  );
  }

export default App;






