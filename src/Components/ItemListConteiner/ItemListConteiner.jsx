import React from "react"
import {ItemList} from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { Productos } from "../../productos"
import { useParams } from "react-router-dom"
import "./itemListConteiner.css"
import { Loader } from "../loader/Loader"


function ItemListConteiner() {
    const [item, setItem] = useState()
    const {id} = useParams(undefined)

    useEffect(()=>{
        setItem(undefined)
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
            {item ? <ItemList items={item} /> : <Loader />}
        </div>
        
    )
}

export {ItemListConteiner}