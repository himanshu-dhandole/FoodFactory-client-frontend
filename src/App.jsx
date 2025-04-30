import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/HomePageStuff/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
