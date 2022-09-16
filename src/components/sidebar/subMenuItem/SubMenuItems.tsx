import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as styled from './SubMenuItem.styles'

interface SubMenuItem{
    selected: boolean;
    title: string; 
    onClick:any;
}



const SubMenuItem = (props:SubMenuItem) =>  {
    
    const {
        selected=false,
        title="null",
        onClick = ()=>{}

    } = props


  return (
    <>
    <styled.SubMenuItemContainer isActive={selected} onClick={onClick}>
       <styled.SubMenuItem>{title}</styled.SubMenuItem>
    </styled.SubMenuItemContainer>
    </>
  )
}
export default SubMenuItem
