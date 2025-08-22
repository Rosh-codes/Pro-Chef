import {useState} from "react"
import ApiContent from "./ApiContent"
import Recipe from "./Recipe"
export default function MainContent(){
    const [foodItems,setFoodItems] = useState([])
    const [showRecipe,setShowRecipe] = useState(false)
    function submit(FormData){
        const Ingredient = FormData.get("Ingredient")
        setFoodItems((prevFoodItems)=>[...prevFoodItems,Ingredient])
    }
    function toggleRecipe(){
        setShowRecipe((prevShowRecipe)=>!prevShowRecipe)
    }
    return(
        <main>
        <form action={submit} className="AddIngredientsForm" >
        <input type="search" id="searchbox" name="Ingredient" placeholder="e.g. pepper" />
        <button>+ Add Ingredient</button>
        </form>
        {foodItems.length > 0 ? <section >
        <ApiContent foodItems = {foodItems} toggleRecipe={toggleRecipe}/>
        </section>:null}
        <section>
           { showRecipe ? <Recipe/> : null}
        </section>
        </main>
    )
}