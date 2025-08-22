export default function ApiContent(props){
    const MappedFoodItems = props.foodItems.map((entry)=><li key={entry}>{entry}</li>)
    return(
       <div className="ItemsList">
        <h1>Ingredients : </h1>
        <ul>
        {MappedFoodItems}
        </ul>
        {props.foodItems.length > 3 ?<div className="recipeContainer">
            <div>
                <h3>Ready for your recipe?</h3>
                <p>Generate your recipe by clicking the button</p>
            </div>
            <button onClick={props.toggleRecipe}>Get Your Recipe</button>      
              </div>:null}
        
        </div>
    )}