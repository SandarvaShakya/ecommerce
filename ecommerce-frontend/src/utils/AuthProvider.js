import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { firebaseAuth } from "../services/fire"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            console.log("User has arrived", currentUser)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider