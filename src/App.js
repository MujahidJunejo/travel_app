import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import GuestList from './screens/GuestList'
import Main from './screens/Main'
import CustomerDetails from './screens/CustomerDetails'
import RoomList from './screens/RoomList'
import Employees from './screens/Employees'
import Reviews from './screens/Reviews'
import Login from './screens/Login'
import RegisterPage from './screens/RegisterPage'
function App() {
  return (
    <div id='root'> 
      <div id="main-wrapper">
        <Header />
        <SideBar />
        <div class="content-body">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/customer-list' element={<GuestList />} />
            <Route path='/customer-details' element={<CustomerDetails />} />
            <Route path='/room-list' element={<RoomList />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App