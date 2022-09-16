import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as styled from './MenuItem.styles' 
interface MenuItem{
    title: string; 
}
const MenuItem = (props:MenuItem) =>  {

    const {
        title="null",
    } = props

  return (
    <>
        <styled.MenuItemTitle>{title}</styled.MenuItemTitle>
    </>
  )
}

export default MenuItem