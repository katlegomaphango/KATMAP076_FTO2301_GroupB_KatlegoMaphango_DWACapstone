
import { Box, ThemeProvider, styled } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage.tsx'
import { theme } from './theme.ts'
import { useSelector } from 'react-redux'
import MusicPlayer from "./components/MusicPlayer"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/LoginPage.tsx'
import SignUp from './pages/SignUpPage.tsx'
import Home from './pages/LandingPage.tsx'
import ShowPage from './pages/ShowPage.tsx'
import { useEffect, useState } from 'react'

const PlayerBox = styled(Box)({
  position: 'sticky',
  height: 98,
  width: '100%',
  bottom: 0,
  right: 0,
  background: `
        linear-gradient(-135deg, 
            var(--clr-dark-light),
            var(--clr-dark-accent))
    `,
  display: 'flex',
  backdropFilter: 'blur(16px',
  borderTopLeftRadius: '1.5rem',
  borderTopRightRadius: '1.5rem',
  zIndex: 10,
})

function App() {
  const { activeEpisode } = useSelector((state: any) => state.player)
  const [token, setToken] = useState({})

  if(token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      const data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Login setToken={setToken} />} />
        <Route path='/signup' element={<SignUp />} />
        {token ? ( <Route path='/home' element={<Home token={token} />} />
          ) : ('')
        }
        {token ? ( <Route path='/show/:id' element={<ShowPage />} />
          ) : ('')
        }
      </Routes>
    </>
  )
}

export default App
