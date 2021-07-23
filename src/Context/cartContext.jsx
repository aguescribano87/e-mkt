import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [compra, setCompra] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadItems, setCantidadItems] = useState(0)

    const agregar = (buy) => {
        const buscar = compra.find(comp => comp.id === buy.id)

        if (buscar === undefined) {
            setCompra([...compra, buy])

        } else {
            const nuevaCompra = compra.map((rep) => {
                if (rep.id === buy.id) {
                    return {
                        ...rep,
                        quantity: (ajustarCantidad(rep.stock, rep.quantity, buy.quantity)),
                        subTotal: (ajustarTotal(rep.stock, rep.quantity, buy.quantity, buy.price))
                    }
                }
                return rep

            })
            setCompra(nuevaCompra)

        }

    }

    useEffect(() => {
        let nuevoTotal = 0
        let nuevaCantidad = 0

        for (const item of compra) {
            nuevoTotal = nuevoTotal + item.subTotal
            nuevaCantidad = nuevaCantidad + item.quantity
        }
        setTotal(nuevoTotal)
        setCantidadItems(nuevaCantidad)

    }, [compra])

    const removeItem = (item) => {
        const newCart = compra.filter((comp) => comp.id !== item.id)
        setCompra(newCart)

    }

    const clearCart = () => {
        setCompra([])
        setTotal(0)
        setCantidadItems(0)
    }

    const ajustarCantidad = (stock, cant1, cant2) => {
        if ((cant1 + cant2) > stock) {
            return stock
        } else {
            if ((cant1 + cant2) >= 1) {
                return cant1 + cant2
            } else {
                return 1
            }
        }
    }

    const ajustarTotal = (stock, cant1, cant2, price) => {
        if ((cant1 + cant2) > stock) {
            return stock * price
        } else {
            if ((cant1 + cant2) >= 1) {
                return (cant1 + cant2) * price
            } else {
                return price
            }
        }
    }



    return <CartContext.Provider value={{ compra, agregar, removeItem, clearCart, total, cantidadItems }}>
        {children}
    </CartContext.Provider>
}
