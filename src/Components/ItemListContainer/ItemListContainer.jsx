import React from "react"
import {ItemList} from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { dataBase } from '../../Firebase/firebase'
import { useParams } from "react-router-dom"
import "./itemListContainer.css"
import { Loader } from "../loader/Loader"


function ItemListContainer() {
    const [item, setItem] = useState()
    const {id} = useParams()

   useEffect(()=>{
       const db = dataBase
       const itemCollection = db.collection("productos")
       
       if (id !== undefined) {
        const filtrarCat = itemCollection.where("categoria","==",id) 
        filtrarCat.get().then((collection)=>{
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
           itemCollection.get().then((collection)=>{
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
    
    return item ? <div className="contenedor"> <ItemList items={item} /> </div> : <Loader/>
     
}

export {ItemListContainer}