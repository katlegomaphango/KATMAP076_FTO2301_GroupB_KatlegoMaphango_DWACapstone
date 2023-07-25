import { useState } from "react"
import { Link } from "react-router-dom"


const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {

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