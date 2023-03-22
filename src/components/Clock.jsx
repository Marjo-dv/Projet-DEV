import { useEffect, useState } from "react"

function Clock(){
    // initialisation de l'état local
    const [date, setDate] = useState(new Date())

    // Fonction appelée automatiquement au montage du composant 
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
    // Fonction appelée automatiquement au démontage du composant 
        return () => {
            clearInterval(interval)
        }
    }, [])

    return(
        <h1>{date.toLocaleTimeString()}</h1>
    )
}

export default Clock