import { ReactNode } from "react"
import {Item } from "../models/items"

interface Props {
    item: Item;
    children :ReactNode
}


export function MenuItem({item, children} :Props){



    return(


            <div>
                Name:{item.name}
                Description:{item.description}
                Calories:{item.calories}
                Price:{item.price}
                Vegetarian: {item.vegetarian}

            

            </div>

    )


}