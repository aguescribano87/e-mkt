import React from "react"
import { useState, useEffect } from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import { Productos } from "../../productos"
import { useParams } from "react-router-dom"

export const ItemDetailContainer= ()=>{
    const [filtrarItem, setFiltrarItem] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const getItems = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(id ? Productos.filter(i => i.id === id): Productos)
            }, 2000);
        })
        getItems.then((item)=>{
            setFiltrarItem(item)
            
        })
        
    },[id])
    
    
    return(
        <>
            {filtrarItem.map(i => <ItemDetail item={i}/>)}
        </>
    )
}