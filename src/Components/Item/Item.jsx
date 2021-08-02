import React from "react"
import { NavLink } from "react-router-dom"
import "./item.css"

export const Item = ({ items }) => {

    return (
        <NavLink className="navLink" to={`/item/${items.id}`}>
            <div className="itemContainer">
                <div className="img-container">
                    <img className="imagen" src={items.pictureUrl} alt="foto" />
                </div>
                <div className="descript-container">
                    <p className="titulo">{items.title}</p>
                    <p className="precio">${items.price}</p>
                </div>
            </div>
        </NavLink>
    )
}