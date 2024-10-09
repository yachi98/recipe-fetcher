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
    servings 
  }) => {
    return (
      <div className="p-5 bg-gray-400 rounded-lg">
        <img src={image} alt={name} width={300} height={400} className="rounded-xl" />
        <h1 className="text-xl">{name}</h1>
        <p>{description}</p>
        <p><strong>Difficulty:</strong>{difficulty}</p>
        <p>{cuisine}</p>
        
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
  
        <p><strong>Calories per Serving:</strong> {caloriesPerServing}</p>
        <p><strong>Rating: </strong>{rating}</p>
        <p><strong>Prep Time:</strong> {prepTimeMinutes} minutes</p>
        <p><strong>Cook Time:</strong> {cookTimeMinutes} minutes</p>
        <p><strong>Servings:</strong> {servings}</p>
        <p><strong>Meal type:</strong>{mealType}</p>
  
        <h3>Instructions:</h3>
        <ol>
          {instructions.map((instruction, idx) => (
            <li key={idx}>{instruction}</li>
          ))}
        </ol>
      </div>
    );
  };
  
  export default Card;