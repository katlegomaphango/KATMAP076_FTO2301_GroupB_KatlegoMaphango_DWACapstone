
import { Box, styled } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import MusicPlayer from "./components/MusicPlayer"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/LoginPage.tsx'
import SignUp from './pages/SignUpPage.tsx'
import HomeLayout from './pages/HomePage.tsx'
import ShowPage from './pages/ShowPage.tsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from './redux/features/tokenSlice.ts'
import Error from './components/Error/Error.tsx'

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
  const { activeEpisode, isPlaying } = useSelector((state: any) => state.player)
  const { token } = useSelector((state: any) => state.token)
  const dispatch = useDispatch()

  if(token.user !== null) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token') !== null) {
      const data = JSON.parse(sessionStorage.getItem('token') || '')
      console.log(data)
      dispatch(setToken(data))
    }
  }, [])

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/error' element={<Error />} />
        {token.user !== null ? ( <Route path='/home' element={<HomeLayout />} />
          ) : (<Route path='*' element={<Login />} />)
        }
        {token.user !== null ? ( <Route path='/home/show/:id' element={<ShowPage />} />
          ) : (<Route path='*' element={<Login />} />)
        }
      </Routes>

      {
          activeEpisode?.title && isPlaying && (
          <PlayerBox>
              <MusicPlayer />
          </PlayerBox>
          )
      }
    </>
  )
}

export default App
