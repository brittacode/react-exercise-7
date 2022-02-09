import { createContext } from "react";
import { Item } from "../models/items";

export interface OrderContextModel{
    order: Item[];
   addItem: (item: Item) => void;
   removeItem: (id: string) => void;

}
export const defaultValue: OrderContextModel = {
    order:[],
    addItem: () => { },
    removeItem: () => { }
};


export const OrderContext = createContext(defaultValue)