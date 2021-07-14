import React from "react"
import {Item} from "../Item/Item"


export const ItemList = ({items})=>{
    
    
    return (
        <>
            {items.map(i => <Item items={i}/>)}
        </>
    )
}