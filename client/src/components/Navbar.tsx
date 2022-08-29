import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';

import companyLogo from '../data/images/logo-light.png';
import companyDarkLogo from "../data/images/logo-dark.png";
import UserProfile from './UserProfile';

import { useStateContext } from '../context/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor}:any) => {
  return (
  <Tooltip title={title}>
    <button type='button'
    onClick={customFunc}
    style={{color}}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
      </span>
        {icon}
    </button>
  </Tooltip>
)};

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode } = useStateContext();
  let clickedUserProfile = false;
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2  relative'>
      <NavButton title='Menu' customFunc={() => {
        setActiveMenu((prevActiveMenu:boolean) =>
        !prevActiveMenu)}} color={currentColor} icon={<AiOutlineMenu/>}
      />
      <div className='flex'>
        <Tooltip title='Profile'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-dark-purple rounded-lg'
          onClick={() => handleClick('userProfile')}>
            <img className='rounded-full w-8 h-8'
            src={currentMode ==='Light' ? companyLogo : companyDarkLogo} alt="Company Logo" />
            <p>
              <span className='text-gray-400 text-14 dark:text-white'>Welcome back, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14 dark:text-white'>Sam Fourie</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </Tooltip>

        {isClicked?.userProfile && <UserProfile/>}
      </div>
    </div> 
  );
};

export default Navbar
