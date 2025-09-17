import { useState,useEffect , useRef} from "react";
import ApiContent from "./ApiContent";
import Recipe from "./Recipe";

export default function MainContent() {
    const [foodItems, setFoodItems] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);
    const [recipe, setRecipe] = useState("");
    const Ref = useRef(null)
    useEffect(()=>{
        if(Ref.current && recipe){
            Ref.current.scrollIntoView({behaviour:"smooth"})
        }
    },[recipe])
    function submit(FormData) {
        const Ingredient = FormData.get("Ingredient");
        setFoodItems((prev) => [...prev, Ingredient]);
    }

    function toggleRecipe() {
        setShowRecipe((prev) => !prev);
    }

    return (
        <main>
            <form action={submit} className="AddIngredientsForm">
                <input type="search" id="searchbox" name="Ingredient" placeholder="e.g. pepper" />
                <button>+ Add Ingredient</button>
            </form>

            {foodItems.length > 0 && (
                <section>
                    <ApiContent
                        foodItems={foodItems}
                        toggleRecipe={toggleRecipe}
                        setRecipe={setRecipe}
                        Ref = {Ref}
                    />
                </section>
            )}

            <section>
                {showRecipe && <Recipe recipe={recipe} />}
            </section>
        </main>
    );
}
