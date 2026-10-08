
import { Route, Routes } from "react-router-dom"
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ViewProduct from "./pages/ViewProduct"
import Parent from "./pages/Parent"
import Counter from "./pages/Counter"



function App() {

  return (
    <>
    <Header/>
    <Routes>
     <Route path="/" element={<Landing/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/landing" element={<Landing/>}/>
     <Route path="/Dashboard" element={<Dashboard/>}/>
     <Route path="/viewProduct/:id" element={<ViewProduct/>}/>
     <Route path="/Parent" element={<Parent/>}/>
     <Route path="/Counter" element={<Counter/>}/>





    </Routes>
    

   <Footer/>
    </>
  )
}

export default App
