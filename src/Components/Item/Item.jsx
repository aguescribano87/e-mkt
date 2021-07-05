import React from "react"
import {NavLink} from "react-router-dom"
import "./item.css"

export const Item = ({items})=>{
    
    return (
        <div className="itemContainer">
            
            <NavLink className="navLink" to={`/item/${items.id}`}>
            <div className="img-container">
            <img className="imagen" src={items.pictureUrl} alt="foto" />
            </div>
            <hr className="linea"/>
            <p className="titulo">{items.title}</p>
            <p className="precio">${items.price}</p>
            </NavLink>
            
        </div>
    )
}