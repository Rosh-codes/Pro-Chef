import { useState } from "react";
import { getRecipeFromMistral } from "../ai";

export default function ApiContent({ foodItems, toggleRecipe, setRecipe }) {
    const [loading, setLoading] = useState(false);

    async function handleRecipeFetch() {
        setLoading(true);
        const recipe = await getRecipeFromMistral(foodItems);
        setRecipe(recipe); 
        toggleRecipe(); 
        setLoading(false);
    }

    const MappedFoodItems = foodItems.map((entry) => <li key={entry}>{entry}</li>);

    return (
        <div className="ItemsList">
            <h1>Ingredients:</h1>
            <ul>{MappedFoodItems}</ul>

            {foodItems.length > 3 && (
                <div className="recipeContainer">
                    <div>
                        <h3>Ready for your recipe?</h3>
                        <p>Generate your recipe by clicking the button</p>
                    </div>
                    <button onClick={handleRecipeFetch} disabled={loading}>
                        {loading ? "Generating..." : "Get Your Recipe"}
                    </button>
                </div>
            )}
        </div>
    );
}
