import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabaseApi"
import { User } from "../assets/constants"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setToken } from "../redux/features/tokenSlice"
import { SetAllLikedEpisodes } from "../redux/features/favoriteSlice"
import { Box, Button, Typography, styled } from "@mui/material"
import {theme} from '../theme'

const StyledBox = styled(Box)({
    backgroundColor: theme.palette.primary.dark,
    padding: 15,
    borderRadius: '0.5rem'
})

const MainBox = styled(Box)({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    flexDirection: 'column',
    gap: 5
})

const Login = () => {
    const { token } = useSelector((state: any) => state.token)
    const [user, setUser] = useState<User | any>(token.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
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

        if(error) throw error
        setToken(data)
        setUser(data.user)

        supabase.auth.onAuthStateChange((event, session) => {
            if(event !== 'SIGNED_OUT') {
                setUser(session?.user)
                dispatch(setToken(session))
            }
        })


        if (user.id !== null) fetchData(user.id)

        navigate('/home')
    }

    const fetchData = async (userId: string) => {
        const { data, error } = await supabase
        .from('favorites')
        .select('description, episode_id, file, title, showTitle')
        .eq('user_id', userId)
        if(error) throw error
        dispatch(SetAllLikedEpisodes(data.map((item) => ({
            showTitle: item.showTitle, 
            episode: {
                file: item.file,
                description: item.description,
                episode: item.episode_id,
                title: item.title
            }
        }))))
        console.log(data)
    }

    return (
        <MainBox>
            <Typography variant="h2" sx={{fontWeight: 'bold'}} >Login</Typography>
            <StyledBox>
                <form onSubmit={handleLogin}>
                    <div style={{marginBottom: 20}}>
                        <input 
                            type="email" 
                            placeholder='email'
                            name='email'
                            onChange={handleChange}
                            style={{background: 'transparent', border: '1px solid', borderColor: theme.palette.primary.contrastText, borderRadius: '0.3rem', padding: '1rem', fontSize: '1rem', color: "white"}}
                        />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <input 
                            type="password" 
                            placeholder='password'
                            name='password'
                            onChange={handleChange}
                            style={{background: 'transparent', border: '1px solid', borderColor: theme.palette.primary.contrastText, borderRadius: '0.3rem', padding: '1rem', fontSize: '1rem', color: "white"}}
                        />
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button type="submit" variant="contained" color="success">
                            Login
                        </Button>
                    </div>
                </form>
                
            </StyledBox>
            <Typography variant="h6">
                Don't have an account? <Link to={'/signup'}>Sign Up</Link>
            </Typography>
        </MainBox>
    )
}

export default Login