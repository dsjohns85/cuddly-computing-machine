import { useState } from 'react'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Symposium from './pages/Symposium'
import Registration from './pages/Registration'
import Resources from './pages/Resources'
import './App.css'
import './styles/pages.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'symposium':
        return <Symposium />
      case 'registration':
        return <Registration />
      case 'resources':
        return <Resources />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
