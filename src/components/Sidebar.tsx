import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';

import { menu } from '../data/scripts/menu.js';
import logoDark  from '../data/images/logo-dark.png';
import logoLight  from '../data/images/logo-light.png';
import { useStateContext } from '../context/ContextProvider'; 

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize} = useStateContext();
  const activeLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-light-purple';
  const normalLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md ' + 
  'text-gray-700 dark:text-gray-200  dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className='pl-3 h-screen
     pb-10'>
      { activeMenu && (<>
      <div className='flex justify-between 
      items-center'>
        <Link to='/' onClick={()=> handleCloseSidebar} 
        className='items-center gap-3 ml-3
        mt-4 flex text-xl font-extrabold
        tracking-tight dark:text-white 
        text-slate-900'>
          <img alt='logo' src={String(logoLight)} className='w-10' /><span>Supply Frame</span>
        </Link>
        <Tooltip title='Close'> 
              <button type='button'
              onClick={() => setActiveMenu(
                (prevActiveMenu: boolean) =>
                !prevActiveMenu)}
              className='text-xl rounded-full
              p-3 hover:bg-light-gray mt-4 block
              md:hidden'
              >
                <MdOutlineCancel/>
              </button>
            </Tooltip>
      </div>
      <div className='mt-10'>
          {menu.map((item) => (
            <div key={item.title}>
              <>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              { item.links.map((link) => (
                <NavLink to={`/${link.url}`}
                key={link.name}
                onClick={handleCloseSidebar}
                className={({ isActive }) => isActive ? activeLink : normalLink}>
                  <span className='capitalize'>
                    {link.name} 
                  </span>
                </NavLink>
              ))}
              </>
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar