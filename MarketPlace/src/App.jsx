import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import Items from './components/Item/Items'
import User from './components/User/User'
import Users from './components/Users'
import Basket from './components/User/Basket'
import Orders from './components/User/Orders'
import Item from './components/Item/Item'




function App() {

  return (
    <>
    <div>
      <Header />
      <Nav />
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/items' element={<Items />}></Route>
        <Route path='/items/:item_id' element={<Item />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/users/:username' element={<User />}></Route>
        <Route path='/users/:username/basket' element={<Basket />}></Route>
        <Route path='/users/:username/orders' element={<Orders />}></Route>


      </Routes>
    
    </div>
    </>
  )
}

export default App
