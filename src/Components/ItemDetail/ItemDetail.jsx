import React, { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../Context/cartContext"
import "./itemDetail.css"

export const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState()
    const { agregar } = useContext(CartContext)

    const onAdd = (c) => {
        setQuantity(c)

        agregar(
            {
                ...item,
                quantity: parseInt(c),
                subTotal: (item.price * c)
            })

    }

    return (
        <div className="conteiner-ID">
            <div className="detail-conteiner">
                <div className="detail-item">
                    <div className="conteiner-img">
                        <img className="detail-img" src={item.pictureUrl} alt="foto" />
                    </div>
                    <div className="detail-counter">
                        <h1 className="detail-title">{item.title}</h1>
                        <p className="detail-price">${item.price}</p>
                        {quantity ?
                            <div><NavLink to="/cart"><button>Terminar Compra</button></NavLink></div>
                            :
                            <div><ItemCount onAdd={onAdd} stock={item.stock} initial={1} /></div>}
                    </div>
                </div>
                <h2 className="detail-description-title">Descripción</h2>
                <p className="detail-description">{item.description}</p>
            </div>
        </div>
    )
}