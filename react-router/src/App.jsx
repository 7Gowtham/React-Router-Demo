import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import All from './Components/All'
import FullStack from './Components/FullStack'
import DataScience from './Components/DataScience'
import CyberSecurity from './Components/CyberSecurity'
import Carrer from './Components/Carrer'


function App() {
  return <>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<All />} />
            <Route path='/full-stack-development' element={<FullStack />}/>
            <Route path='/data-science' element={<DataScience />}/>
            <Route path='/cyber-security' element={<CyberSecurity />}/>
            <Route path='/career' element={<Carrer />}/>
        </Routes>
    </BrowserRouter>
  </>
}

export default App