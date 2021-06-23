import React from "react"
import {Item} from "../Item/Item"


export const ItemList = ({items})=>{
    
    return (
        <div>
            {items.map((i)=>{
               return <Item items={i}/>
            })}
        </div>
    )
}