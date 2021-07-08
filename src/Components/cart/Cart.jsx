import React, {useContext} from "react"
import {CartContext} from "../../Context/cartContext"

export const Cart = ()=> {
    const {compra, removeItem, clearCart} = useContext(CartContext)

    return (
        <div>
            {compra.map((comp)=><p>{`${comp.id} ${comp.title} $${comp.price} ${comp.quantity}`} {<button onClick={()=>removeItem(comp)}>Eliminar</button>}</p>)}
            <button onClick={()=>clearCart()}>Limpiar Carrito</button>
        </div>
    )
}