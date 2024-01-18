import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Book from './components/Book'
import Footer from './components/Footer'
import { createBrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Book/>
      <Footer/>
    </div>
  )
}

export default App

export const appRouter=createBrowserRouter([
  {path:"/",
  element:<App/>
},{
  path:"/Books",
  element:<Book/>
},{
  path:"/Contact",
  element:<Footer/>
}
])