import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import ContactForm from './components/contactForm/ContactForm'
import AcercaDe from './components/acercaDe/AcercaDe'
import Servicios from './components/servicios/Servicios'
import Footer from './components/footer/Footer'



const RoutesApp = () => {
  return (
    <div>
      <NavBar/>     
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<ContactForm/>} />
      <Route path='/about' element={<AcercaDe/>}/>
      <Route path='/services' element={<Servicios/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default RoutesApp