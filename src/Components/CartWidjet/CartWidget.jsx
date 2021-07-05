import React from "react"
import "./CartWidget.css"
import carrito from "../../img/carrito.svg"

function CartWidget() {
    return (
        <img className="carrito" src={carrito} alt="carrito" />
    )
}

export {CartWidget}