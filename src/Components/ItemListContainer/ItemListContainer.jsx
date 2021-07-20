import React from "react"
import {ItemList} from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { dataBase } from '../../Firebase/firebase'
import { useParams } from "react-router-dom"
import "./itemListContainer.css"
import { Loader } from "../loader/Loader"


export const ItemListContainer = ()=> {
    const [item, setItem] = useState()
    const {id} = useParams()

   useEffect(()=>{
       const db = dataBase
        
       if (id !== undefined) {
            db.collection("productos")
            .where("categoria","==",id)
            .where("stock",">",0)
            .get()
            .then((collection)=>{
            if (collection === 0){
                console.log("no hay resultados")
            }
            setItem(collection.docs.map((doc)=>{
                return{...doc.data(),id: doc.id}
            }))
            
        }).catch((error)=>{
            console.log("error al buscar los items",error)
        })
       }else{
                db.collection("productos")
                .where("stock",">",0)
                .get()
                .then((collection)=>{
               if (collection === 0){
                   console.log("no hay resultados")
               }
               setItem(collection.docs.map((doc)=>{
                   return{...doc.data(),id: doc.id}
               }))
           }).catch((error)=>{
               console.log("error al buscar los items",error)
           }) 
       }
    },[id])
    
    return <div className="contenedor-gral"> {item ? <div className="contenedor-items"> <ItemList items={item} /> </div> : <Loader/>} </div>
     
}

