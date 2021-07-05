import React, { useState } from "react"
import {ItemCount} from "../ItemCount/ItemCount"
import {NavLink} from "react-router-dom"

export const ItemDetail= ({item})=>{
    const [quantity, setQuantity] = useState(undefined)

    const onAdd = (c)=> setQuantity(c)

    return( 
        
        <div>
         
            <img src={item.pictureUrl} alt="foto" />
            <h1>{item.title}</h1>
            <h2>${item.price}</h2>
            {quantity ? <NavLink to="/cart"><button>Terminar Compra</button></NavLink>  : <ItemCount onAdd={onAdd} stock={item.stock} initial={1}/> }
            
            <p>{item.description}</p>
            
        </div>
    )
}