import React from "react"
import { useState, useEffect } from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import { Productos } from "../../productos"

export const ItemDetailContainer= ()=>{
    const [filtrarItem, setFiltrarItem] = useState([])

    useEffect(()=>{
        const getItems = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Productos)
            }, 2000);
        })
        getItems.then((item)=>{
            setFiltrarItem(item.find(i => i.id === 1))
        })
        
    },[])

    
    return(
        <div>
            <ItemDetail item={filtrarItem}/>
        </div>
    )
}