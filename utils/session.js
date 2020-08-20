import { useContext } from "react"
import { AppContext } from "../views/page"

export const setLogin = ({token, ...data}) => {
    const { setUser } = useContext(AppContext)
    localStorage.setItem('token', token)
    setUser(data)
} 

export const setLogout = () => {
    const { setUser } = useContext(AppContext)
    localStorage.removeItem('token')
    setUser(null)
}