import React, { useContext, useState } from "react"
import {ItemCount} from "../ItemCount/ItemCount"
import {NavLink} from "react-router-dom"
import {CartContext} from "../../Context/cartContext"

export const ItemDetail= ({item})=>{
    const [quantity, setQuantity] = useState()
    const {agregar} = useContext(CartContext)

    const onAdd = (c)=> {
        setQuantity(c)
        
        agregar (
            {...item,
            quantity: parseInt(c),
            subTotal: (item.price * c)
            })
     
    }

    return( 
        
        <div className="conteiner">
         
            <img src={item.pictureUrl} alt="foto" />
            <h1>{item.title}</h1>
            <h2>${item.price}</h2>
            {quantity ? <NavLink to="/cart"><button>Terminar Compra</button></NavLink> : <ItemCount onAdd={onAdd} stock={item.stock} initial={1}/> }
            
            <p>{item.description}</p>
             
        </div>
    )
}