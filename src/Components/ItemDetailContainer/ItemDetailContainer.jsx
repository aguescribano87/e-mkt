import React from "react"
import { useState, useEffect } from "react"
import {ItemDetail} from "../ItemDetail/ItemDetail"
import { dataBase } from '../../Firebase/firebase'
import { useParams } from "react-router-dom"
import { Loader } from "../loader/Loader"
import  "./ItemDetailContainer.css"

export const ItemDetailContainer= ()=>{
    const [filtrarItem, setFiltrarItem] = useState()
    const {id} = useParams()

    useEffect(()=>{
        const db = dataBase
        const itemCollection = db.collection("productos")
        const item = itemCollection.doc(id)

        item.get().then((doc)=>{
            if(!doc.exists){
                console.log("item no encontrado")
                return
            }
            console.log("item encontrado")
            setFiltrarItem({...doc.data(),id: doc.id})
        }).catch((error)=>{
            console.log("error al buscar los items",error)
        }) 

        
    },[id])
     
    return filtrarItem ? <div><ItemDetail item={filtrarItem}/></div> : <Loader />
   
}