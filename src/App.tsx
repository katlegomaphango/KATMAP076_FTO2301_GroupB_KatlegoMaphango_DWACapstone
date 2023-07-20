
import { Box, ThemeProvider } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage.tsx'
import { theme } from './theme.ts'

function App() {

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
        </Box>
      </ThemeProvider>
      
    </>
  )
}

export default App
