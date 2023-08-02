import logo from '../../assets/meta/logo.png'
import { AppBar, Avatar, Button, Toolbar, Typography, styled } from '@mui/material'
import { theme } from '../../theme'
import { Login, Logout } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseApi'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeToken } from '../../redux/features/tokenSlice'

const LogoText = styled(Typography)({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.light,
    marginLeft: '0.5rem'
})

const LoginButton = styled(Button)({
    borderRadius: '0.3rem',
    border: '1px solid',
    color: theme.palette.primary.contrastText
})

const AppToolbar = styled(Toolbar)({
    backgroundColor: theme.palette.primary.dark, 
    display: 'flex', 
    justifyContent: 'space-between'
})

const Navbar = () => {
    const { token } = useSelector((state: any) => state.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if(error) throw error
        sessionStorage.removeItem('token')
        dispatch(removeToken())
        navigate('/')
    }

    return (
        <>
            <AppBar position='sticky'>
                <AppToolbar>
                    <Toolbar>
                        <Avatar alt='logo' src={logo} />
                        <LogoText variant='h1' sx={{display: {xs: 'none', sm: 'block'}}}>
                            Plug 'n Play
                        </LogoText>
                    </Toolbar>
                    {
                        token.user === null ? (
                            <LoginButton variant="outlined" onClick={() => {navigate('/')}}>
                                <Login />
                                <Typography ml={1} sx={{display: {xs: 'none', sm: 'block'}}}>Login</Typography>
                            </LoginButton>
                        ) : (
                            <LoginButton variant="outlined" onClick={handleLogout}>
                                <Logout />
                                <Typography ml={1} sx={{display: {xs: 'none', sm: 'block'}}}>Logout</Typography>
                            </LoginButton>
                        )
                    }
                </AppToolbar>
            </AppBar>
        </>
    )
}

export default Navbar