import React from "react"
import {ItemList} from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { Productos } from "../../productos"
import { useParams } from "react-router-dom"
import "./itemListConteiner.css"


function ItemListConteiner() {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        const getItem = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(id ? Productos.filter(cat => cat.categoria === id): Productos)
            }, 2000);
        })
        getItem.then((item)=>{
            setItem(item)
            
        })
    },[id])
    
    return (
        <div className="contenedor">
            <ItemList items={item} />
        </div>
        
    )
}

export {ItemListConteiner}