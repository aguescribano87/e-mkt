import React from "react"
import {ItemCount} from "../ItemCount/ItemCount"

export const ItemDetail= ({item})=>{
    
    return( 
        <div>
            <img src={item.pictureUrl} alt="foto" />
            <h1>{item.title}</h1>
            <h2>${item.price}</h2>
            <p>{item.description}</p>
            
            <ItemCount />
        </div>
    )
}