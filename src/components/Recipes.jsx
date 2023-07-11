import { useState } from "react"

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4
}

console.log(elvenShieldRecipe)
console.log(elvenGauntRecipe)

export const Recipes = () => {
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipe(elvenGauntRecipe)}>Elven Gaunt Recipe</button>

            <ul>
                {Object.keys(recipe).map(material => (
                    <li key={material}>
                        {material} : {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}