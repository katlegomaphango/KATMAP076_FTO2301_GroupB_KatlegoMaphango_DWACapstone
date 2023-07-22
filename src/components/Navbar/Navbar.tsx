import './Navbar.css'
import logo from '../../assets/meta/logo.png'
import { AppBar, Avatar, Button, Toolbar, Typography, styled } from '@mui/material'
import { theme } from '../../theme'
import { Login } from '@mui/icons-material'

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

// const LogoText = styled(Typography)(({theme})=>({
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: theme.palette.primary.light
// }))

const Navbar = () => {

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
                    <LoginButton variant="outlined">
                        <Login />
                        <Typography ml={1} sx={{display: {xs: 'none', sm: 'block'}}}>Login</Typography>
                    </LoginButton>
                </AppToolbar>
            </AppBar>
        </>
    )
}

export default Navbar