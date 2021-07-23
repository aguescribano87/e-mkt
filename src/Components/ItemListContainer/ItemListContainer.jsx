import React from "react"
import { ItemList } from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { dataBase } from '../../Firebase/firebase'
import { useParams } from "react-router-dom"
import "./itemListContainer.css"
import { Loader } from "../loader/Loader"
import { Banner } from "../banner/banner"


export const ItemListContainer = () => {
    const [item, setItem] = useState()
    const [load, setLoad] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const db = dataBase

        if (id !== undefined) {
            setLoad(true)
            db.collection("productos")
                .where("categoria", "==", id)
                .where("stock", ">", 0)
                .get()
                .then((collection) => {
                    if (collection === 0) {
                        console.log("no hay resultados")
                    }
                    setItem(collection.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    }))

                }).catch((error) => {
                    console.log("error al buscar los items", error)
                }).finally(setLoad(false))
        } else {
            setLoad(true)
            db.collection("productos")
                .where("stock", ">", 0)
                .get()
                .then((collection) => {
                    if (collection === 0) {
                        console.log("no hay resultados")
                    }
                    setItem(collection.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    }))
                }).catch((error) => {
                    console.log("error al buscar los items", error)
                }).finally(setLoad(false))
        }
    }, [id])

    return <div className="contenedor-gral"> <Banner /> {item ? <div className="contenedor-items">   <ItemList items={item} /> </div> : <Loader load={load} />} </div>

}

