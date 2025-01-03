import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css"
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Editor from './pages/Editor';
import About from './pages/About'
import Contact from './pages/Contact';

const App = () => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isLoggedIn ? <Home /> : <Navigate to="/login"/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editor/:projectID' element={isLoggedIn ? <Editor /> : <Navigate to="/login"/>} />
          <Route path="*" element={isLoggedIn ? <NoPage />: <Navigate to="/login"/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App