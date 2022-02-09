import { useContext } from "react"
import { OrderContext } from "../context/OrderContext"

export function Header(){


    const {order } = useContext(OrderContext)

    return(

        <div>
            <h1> Food </h1>
        </div>
    )
}