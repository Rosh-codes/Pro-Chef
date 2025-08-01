import {use, useState} from "react"
export default function MainContent(){
    const [foodItems,setFoodItems] = useState([])
    const MappedFoodItems = foodItems.map((entry)=><li key={entry}>{entry}</li>)
    function submit(FormData){
        const Ingredient = FormData.get("Ingredient")
        setFoodItems((prevFoodItems)=>[...prevFoodItems,Ingredient])

        
    }
    return(
        <main>
        <form action={submit} className="AddIngredientsForm" >
        <input type="search" id="searchbox" name="Ingredient" placeholder="e.g. pepper" />
        <button>+ Add Ingredient</button>
        </form>
        {foodItems.length > 0 ? <section >
        <div className="ItemsList">
        <h1>Ingredients : </h1>
        <ul>
        {MappedFoodItems}
        </ul>
        {foodItems.length > 3 ?<div className="recipeContainer">
            <div>
                <h3>Ready for your recipe?</h3>
                <p>Generate your recipe by clicking the button</p>
            </div>
            <button>Get Your Recipe</button>      
              </div>:null}
        
        </div>
        </section>:null}
        </main>
    )
}