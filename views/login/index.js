import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../../sharedComponents/logo'
import { useState, useContext } from 'react'
import classes from './style.module.css'
import { setLogin } from '../../utils/session'
import { AppContext } from '../page'

const Input = ({ value, setValue, ...props }) => {
    return (
        <label>
            <input value={value} {...props} className={classes.input}
                onChange={e => setValue(e.target.value)} />
        </label>
    )
}

const Login = () => {
    const router = useRouter()
    const { setUser } = useContext(AppContext) 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onClickLogin = () => {
        const body = { username, password }
        const config = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // HardCoded
        const token = 'asdasd'
        setLogin(setUser, { token, username })
        router.push('/user')

        // fetch('/', config)
        //     .then(res => res.json())
        //     .then(({ token }) => {
        //         setLogin(setUser, { token, username })
        //         router.push('/user')
        //     })
        //     .catch(console.error)
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onClick={e => e.preventDefault()}>
                <Logo />
                <h1>Bienvenido!</h1>
                <Input type='email' placeholder='Username' value={username} setValue={setUsername} />
                <Input type='password' placeholder='Password' value={password} setValue={setPassword} />
                <button onClick={onClickLogin} className='btnAction'>
                    Iniciar sesión
                </button>
                <Link href='/'>
                    <a className={classes.backHome}>
                        <i className='fas fa-arrow-left'></i>
                        Volver a Boreal Studio
                    </a>
                </Link>
            </form>
        </div>
    )
}

export default Login