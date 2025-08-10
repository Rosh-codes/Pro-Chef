import {useState} from "react"
import ApiContent from "./ApiContent"
export default function MainContent(){
    const [foodItems,setFoodItems] = useState([])
    
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
        <ApiContent foodItems = {foodItems}/>
        </section>:null}
        </main>
    )
}