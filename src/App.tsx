import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import './App.css'


function App() {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={ { zIndex: '1000' } }>
            <Tooltip title='Settings'> 
              <button type='button'
              className='text-3xl 
              p-3 
              hover:drop-shadow-xl
              hover:bg-light-gray
              text-white'
              style={ {background: 'blue',
            borderRadius: '50%'} }
              >
                <FiSettings/>
              </button>
            </Tooltip>
          </div>
          { activeMenu ? (
            <div className='w-72 fixed sidebar 
            dark:bg-secondary-dark-bg 
            bg-white'>
              Sidebar
            </div>
          ) : (
            <div className='w-0
            dark:bg-secondary-dark-bg'>
              Sidebar w-0
            </div>
          )}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${ activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg
            dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element='Dashboard'/>
              
              {/* Categories */}
              <Route path='/CustomerRelated' element='Customer Related'/>
              <Route path='/TrafficAndSearches' element='Traffic & Searches'/>
              <Route path='/Downloads' element='Downloads'/>
              <Route path='/CountsAndRequests' element='Counts & Requests'/>
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
