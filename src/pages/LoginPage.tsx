import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabaseApi"

type PROPS = { 
    setToken: React.Dispatch<React.SetStateAction<{}>> 
}

const Login = (props: PROPS) => {
    const { setToken } = props
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => {
        return {
            ...prev,
            [event.target.name]: event.target.value
        }
        })
    }

    const handleLogin = async (e: Event) => {
        e.preventDefault()
        
        const {data, error} = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        })
        // const {data, error} = await supabase.auth.signInWithOAuth({
        //     provider: 'google'
        // })

        if(error) throw error
        console.log(data)
        setToken(data)
        navigate('/home')
    }

    return (
        <>
            <div>
                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder='email'
                        name='email'
                        onChange={handleChange}
                    />
                    <div></div>
                    <input 
                        type="password" 
                        placeholder='password'
                        name='password'
                        onChange={handleChange}
                    />

                    <div>
                        <button type='submit'>
                            Login
                        </button>
                    </div>
                </form>
                Don't have an account? <Link to={'/signup'}>Sign Up</Link>
            </div>
        </>
    )
}

export default Login