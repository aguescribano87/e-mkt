import React from "react"
import { useState, useEffect } from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import { Productos } from "../../productos"

export const ItemDetailContainer= ({saludo})=>{
    const [items, setItems] = useState([])
    
    useEffect(()=>{
        const getItems = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Productos)
            }, 2000);
        })
        getItems.then((item)=>{
            setItems(item)
        })

    },[])

    return(
        <div>
            {items.filter((i)=> i.id === 1)
                  .map((i)=><ItemDetail item={i}/>)  
            }
            
            
        </div>
    )
}