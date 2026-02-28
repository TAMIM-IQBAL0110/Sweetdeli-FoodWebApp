import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate,Outlet} from 'react-router-dom'
import Navbar from "./componets/Navbar"
import UserProvider from "./context/UserContext";


// protected Route Layout Component
const ProtectedLayout = ()=>{
  const token = localStorage.getItem('token')
  if(!token){
    return <Navigate to="/login" replace/>
  }
  return <Outlet/>
}

// Dashboard Layout with navbar
const DashboardLayout = ()=>{
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

const Root = ()=>{
  const isAuthenticated = !!localStorage.getItem('token')
  return isAuthenticated?(
    <Navigate to = "/dashboard" replace/>
  ):(
    <Navigate to = "/login" replace/>
  )
}

function App(){
  return(
    <UserProvider>
      <Router>
        <Routes>
          {/* Root redirect */}
          <Route path = "/" element = {<Root/>}/>

          {/* Auth Routes */}
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/login" element = {<Login/>}/>
          
          {/* Protected Routes with Navbar */}
          <Route element = {<ProtectedLayout/>}>
            <Route element = {<DashboardLayout/>}>
              <Route path = "/home" element = {<Home/>}/>
              <Route path = "/discover" element = {<Discover/>}/>
              <Route path = "/blog" element = {<Blog/>}/>
              <Route path = "/about" element = {<About/>}/>
              <Route path = "/contact" element = {<Contact/>}/>
              <Route path = "/addCard" element = {<AddCard/>}/>
              <Route path = "/profile" element = {<Profile/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  )
}
export default App;