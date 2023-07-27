import { useState } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../lib/supabaseApi"


const SignUp = () => {
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

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const {data, error} = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
        })

        if(error) throw error
        alert('check email for confirmation link')
    }


    return (
        <>
        <div>
            <form onSubmit={(e) => handleSignUp(e)} >
                <div>
                    <input 
                        type="email" 
                        placeholder='email'
                        name='email'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder='password'
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type='submit'>
                    sign up
                    </button>
                </div>
            </form>
            Already have an account? <Link to={'/'}>Login</Link>
        </div>
        </>
    )
}

export default SignUp