import React from "react"
import { Item } from "../Item/Item"
import { Categorias } from '../../Categorias'
import "./itemList.css"

export const ItemList = ({ items }) => {


    return (
        <>
            {Categorias.map(cat => {
                const filtrarItems = items.filter(i => cat.toLocaleLowerCase() === i.categoria)
                return (

                    <>
                        {filtrarItems.length ? <p className="categoria-item">{cat}</p> : ""}
                        {filtrarItems.map(i => <Item items={i} />)}
                    </>

                )

            })}
        </>
    )
}