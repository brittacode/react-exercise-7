import { useState } from "react";
import { ReactNode } from "react";
import { Item } from "../models/items";
import { OrderContext } from "./OrderContext";

export function OrderContextProvider( props: {children: ReactNode}){


    const [order, setOrder] = useState<Item[]>([]);

    function addItem(item: Item): void{
        setOrder(prevOrder => [
            ...prevOrder, item 
        ])

    }

    function removeItem(id: string): void{
        setOrder(prevOrder => [
            ...prevOrder 
        ])

    }

    return(

        <OrderContext.Provider value={ {order, addItem, removeItem} } >
            {props.children}
        </OrderContext.Provider>

    )



}