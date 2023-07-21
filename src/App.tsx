
import { Box, ThemeProvider, styled } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage.tsx'
import { theme } from './theme.ts'
import { useSelector } from 'react-redux'
import MusicPlayer from "./components/MusicPlayer"

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

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <div className="app"> */}
        <Box>
          <Navbar />
          <LandingPage />
          {/* <div className="app-container">
            <LandingPage />
          </div> */}
          {
            activeEpisode?.title && (
              <PlayerBox>
                <MusicPlayer />
              </PlayerBox>
            )
          }
        </Box>
      </ThemeProvider>
      
    </>
  )
}

export default App
