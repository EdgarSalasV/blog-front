import { useContext } from "react"
import { AppContext } from "../page"

const user = ( ) => {
    const { user } = useContext(AppContext)

    const getData = () => {
        if(user) {
            return (
                Object.entries(user)
                .map(([key, value]) => {
                    return(
                        <div>
                            <strong> { key } </strong>
                            <span> { value } </span>
                        </div>
                    )
                })
            )
        } else {
            return null
        }
    }

    return (
        <div>
            <h1>Datos</h1>
            { getData() }
        </div>
    )
}

export default user