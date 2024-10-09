const Card = ({
  name,
  description,
  difficulty,
  cuisine,
  ingredients,
  caloriesPerServing,
  cookTimeMinutes,
  image,
  rating,
  mealType,
  prepTimeMinutes,
  instructions,
  servings,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between mb-4">
        <p className="font-semibold">
          <strong>Difficulty:</strong> {difficulty}
        </p>
        <p className="font-semibold">
          <strong>Cuisine:</strong> {cuisine}
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((ingredient, idx) => (
          <li key={idx} className="text-gray-700">
            {ingredient}
          </li>
        ))}
      </ul>

      <div className="mb-4">
        <p className="font-semibold">
          <strong>Calories per Serving:</strong> {caloriesPerServing}
        </p>
        <p className="font-semibold">
          <strong>Rating:</strong> {rating}
        </p>
        <p className="font-semibold">
          <strong>Prep Time:</strong> {prepTimeMinutes} minutes
        </p>
        <p className="font-semibold">
          <strong>Cook Time:</strong> {cookTimeMinutes} minutes
        </p>
        <p className="font-semibold">
          <strong>Servings:</strong> {servings}
        </p>
        <p className="font-semibold">
          <strong>Meal Type:</strong> {mealType}
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
      <ol className="list-decimal list-inside text-gray-700">
        {instructions.map((instruction, idx) => (
          <li key={idx} className="mb-1">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Card;
