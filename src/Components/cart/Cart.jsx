import React, {useContext} from "react"
import {CartContext} from "../../Context/cartContext"
import "./cart.css"
import {Link} from "react-router-dom"
import trash from "../../img/trash.svg"

export const Cart = ()=> {
    const {compra, removeItem, clearCart, total} = useContext(CartContext)

    return (
        <div>
            {compra.length !== 0 ? compra.map((comp)=>
                                <div className="contenedor-item-carrito">
                                    <img className="imagen-item-carrito" src={comp.pictureUrl} alt="foto" />
                                    <p className="title-carrito">{comp.title}</p>
                                    <p>{`( ${comp.quantity} ) `}</p>
                                    <p>{`$ ${comp.subTotal}`}</p>
                                    <img src={trash} alt="trash" onClick={()=>removeItem(comp)}/>
                                </div>):<p className="carrito-vacio">{`Tu CARRITO esta vacio hace "click" en nuestro logo para ver el catálogo`}</p>}
            <div className="contenedor-botones">
            <Link to="/">
                <h1 className="logo-carrito">e-mkt</h1>
            </Link>
            {compra.length !== 0 ? <button onClick={()=>clearCart()}>Limpiar Carrito</button>:""}
            {compra.length !== 0 ? <p>{`Total: $${total}`}</p>:""}    
            {compra.length !== 0 ? <button>Comprar</button>:""}
            </div>
        </div>
    )
}