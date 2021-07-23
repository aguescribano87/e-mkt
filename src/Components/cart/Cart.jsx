import React, { useContext } from "react"
import { CartContext } from "../../Context/cartContext"
import "./cart.css"
import { Link } from "react-router-dom"
import trash from "../../img/trash.svg"
import { CartCounter } from "../cartCounter/cartCounter"

export const Cart = () => {
    const { compra, removeItem, clearCart, total } = useContext(CartContext)

    return (
        <>
            {compra.length ? compra.map((comp) =>
                <div className="contenedor-item-carrito">
                    <img className="imagen-item-carrito" src={comp.pictureUrl} alt="foto" />
                    <p className="title-carrito">{comp.title}</p>
                    <p> <CartCounter item={comp} /> </p>
                    <p className="precio-carrito">{`$ ${comp.subTotal}`}</p>
                    <img src={trash} alt="trash" onClick={() => removeItem(comp)} />
                </div>) : <p className="carrito-vacio">Tu CARRITO esta vacio hace "click" en nuestro logo para ver el catálogo</p>}
            <div className="contenedor-botones">
                <Link to="/">
                    <h1 className="logo-carrito">e-mkt</h1>
                </Link>
                {compra.length ? <button onClick={() => clearCart()}>Limpiar Carrito</button> : ""}
                {compra.length ? <p>{`Total: $${total}`}</p> : ""}
                {compra.length ? <Link to="/checkout"><button>Comprar</button></Link> : ""}
            </div>
        </>
    )
}