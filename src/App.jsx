import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs'
import Services from './components/Services'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
