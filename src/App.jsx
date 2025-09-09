import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Footer from './shared/Footer/Footer'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './shared/Header/Header';
import "bootstrap-icons/font/bootstrap-icons.css";
import { LenisProvider } from './utils/LenisProvider'

function App() {
  const [headerMarquee, setHeaderMarquee] = useState(false)

   window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      setHeaderMarquee(true);
    }
    if (window.pageYOffset <= 100) {
      setHeaderMarquee(false);
    }
  });

  return (
    <LenisProvider>
      <Router>
        <Header headerMarquee={headerMarquee}/>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
        <Footer/>
      </Router>
    </LenisProvider>
  )
}

export default App
