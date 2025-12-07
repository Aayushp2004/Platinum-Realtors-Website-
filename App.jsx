import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components.jsx/Home'
import About from './Components.jsx/About'
import SaleAndPurchase from './Components.jsx/SaleAndPurchase'
import Navbar from './Components.jsx/Navbar'
import Contact from './Components.jsx/Contact'
import LeaveAndLicense from './Components.jsx/LeaveAndLicense'
import Footer from './Components.jsx/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <div id='home'><Home/></div>
      <div id='about'><About/></div>  
      <div id='leaveandlicense'><LeaveAndLicense/></div>
      <div id='saleandpurchase'><SaleAndPurchase/></div>
      <div id='contact'><Contact/></div>
      <Footer/>
    </div>
  )
}

export default App
