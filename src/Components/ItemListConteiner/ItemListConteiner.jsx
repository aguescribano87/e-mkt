import React from "react"
import {ItemCount} from "../ItemCount/ItemCount"


function ItemListConteiner({saludo}) {

    return (
        <div>
            <p>{saludo}</p>
            <ItemCount initial="1" stock="5" />
        </div>
        
    )
}

export {ItemListConteiner}