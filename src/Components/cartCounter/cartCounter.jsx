import React,{useContext} from "react"
import removeCartCounter from "../../img/remove-cartcounter.png"
import addCartCounter from "../../img/add-cartcounter.png"
import "./cartCounter.css"
import {CartContext} from "../../Context/cartContext"

export const CartCounter = ({item})=>{
    const {agregar} = useContext(CartContext)

    return(
        <div className="contenedor-cartCounter">
            <img onClick={()=>agregar({...item,quantity:-1,subTotal:-item.price})} className="btn-cartCounter" src={removeCartCounter} alt="remove" />
            <p>{item.quantity}</p>
            <img onClick={()=>agregar({...item,quantity:1,subTotal:item.price})} className="btn-cartCounter" src={addCartCounter} alt="add" />
        </div>
    )

}