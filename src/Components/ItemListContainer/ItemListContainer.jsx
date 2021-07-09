import React from "react"
import {ItemList} from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { Productos } from "../../productos"
import { useParams } from "react-router-dom"
import "./itemListContainer.css"
import { Loader } from "../loader/Loader"


function ItemListContainer() {
    const [item, setItem] = useState()
    const {id} = useParams()

    useEffect(()=>{
        setItem()
        const getItem = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(id ? Productos.filter(cat => cat.categoria === id): Productos)
            }, 1000);
        })
        getItem.then((item)=>{
            setItem(item)
            
        })
    },[id])
    
    return (
        <>
            {item ? <div className="contenedor"> <ItemList items={item} /> </div>: <Loader/>}
        </>
        
    )
}

export {ItemListContainer}