import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
// import Login from './screens/Login'
import GuestList from './screens/GuestList'
import Main from './screens/Main'
function App() {
  return (
    <div id='root'> 
      <div id="main-wrapper">
        <Header />
        <SideBar />
        <div class="content-body">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/guest-list' element={<GuestList />} />
            {/* <Route path='/login' element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App