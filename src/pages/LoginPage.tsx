import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabaseApi"
import { TOKEN } from "../assets/constants"

type PROPS = { 
    setToken: React.Dispatch<React.SetStateAction<TOKEN | null | any >> 
}

const Login = (props: PROPS) => {
    const { setToken } = props
    const navigate = useNavigate()
    const [stateToken, setStateToken] = useState<{} | any>({})
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

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const {data, error} = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        })
        // const {data, error} = await supabase.auth.signInWithOAuth({
        //     provider: 'google'
        // })
        supabase.auth.onAuthStateChange((event, session) => {
            if(event !== 'SIGNED_OUT') {
                setToken(session)
            }
        })

        if(error) throw error
        //setToken(data)
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