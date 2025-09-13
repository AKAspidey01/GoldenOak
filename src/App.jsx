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
import Menu from './components/Menu/Menu'
import ScrollToTop from './utils/ScrollToTop';
import { Toaster } from "react-hot-toast";
import OurVision from './components/OurVision/OurVision'
import EventRoom from './components/EventRoom/EventRoom'


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
        <ScrollToTop/>
        <Toaster 
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
              fontFamily: 'Poppins',
              paddingRight: 15,
              paddingLeft: 15,
            },
        
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
      />
        <Header headerMarquee={headerMarquee}/>
        <Routes>
          <Route path='/' Component={Home} exact={true}/>
          <Route path='/menu' Component={Menu} exact={true}/>
          <Route path='/our-vision' Component={OurVision} exact={true}/>
          <Route path='/event-space' Component={EventRoom} exact={true}/>
        </Routes>
        <Footer/>
      </Router>
    </LenisProvider>
  )
}

export default App
