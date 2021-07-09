import React, {Fragment, useContext} from "react"
import "./CartWidget.css"
import carrito from "../../img/carrito.svg"
import {NavLink} from "react-router-dom"
import {CartContext} from "../../Context/cartContext"

export const CartWidget= ()=> {
    const {cantidadItems} = useContext(CartContext)
    return (
        <Fragment>
            <NavLink className="contenedor-carrito" to="/cart">
                <img className="carrito" src={carrito} alt="carrito" />
                {cantidadItems !== 0 ? <span className="numero">{cantidadItems}</span> : ""}
            </NavLink>
        </Fragment>
    )
}
