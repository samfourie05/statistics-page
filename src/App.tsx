import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import './App.css'
import { Navbar, Footer, Header, Sidebar, ThemeSettings } from './components';
import { Dashboard, CountsAndRequests, CustomerRelated, Downloads, TrafficAndSearches } from './pages';

import { useStateContext } from './context/ContextProvider' 


function App() {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          { activeMenu ? (
            <div className='w-72 fixed sidebar 
            dark:bg-secondary-dark-bg 
            bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0
            dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg
            dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={ <Dashboard/> }/>
              
              {/* Categories */}
              <Route path='/CustomerRelated' element={ <CustomerRelated /> }/>
              <Route path='/TrafficAndSearches' element={ <TrafficAndSearches /> } />
              <Route path='/Downloads' element={ <Downloads /> }/>
              <Route path='/CountsAndRequests' element={ <CountsAndRequests /> }/>
            </Routes>
            </div>

          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
