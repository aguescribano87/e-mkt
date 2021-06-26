import React from "react"
import {ItemCount} from "../ItemCount/ItemCount"
import {ItemList} from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { Productos } from "../../productos"


function ItemListConteiner({saludo}) {
    const [item, setItem] = useState([])
    
    const mensaje = (c)=> alert(`Se agregaron ${c} productos al carrito`)
    
    //desafio MAP & PROMISE
    useEffect(()=>{

        const getItem = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Productos)
            }, 2000);
        })
        getItem.then((item)=>{
            setItem(item)
            console.log(item)
        })
    },[])

    return (
        <div>
            <p>{saludo}</p>
            <ItemCount onAdd={mensaje} initial="1" stock="5" />
            <ItemList items={item} />
        </div>
        
    )
}

export {ItemListConteiner}