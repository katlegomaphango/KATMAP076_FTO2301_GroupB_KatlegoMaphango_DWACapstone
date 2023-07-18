
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage.tsx'

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <div className="app-container">
          <LandingPage />
        </div>
      </div>
    </>
  )
}

export default App
