import React from "react";
import * as styled from "./Sidebar.styles";
import { useState } from "react";
import logoWhite from "../../data/images/logo-white.png";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { menu } from "../../tsutil/menu";
import { NavLink } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/hooks";
import { setSidbarOpen } from "../../redux/reducers/sidebarReducer";
import MenuItem from "./menuItem/MenuItem";
import  SubMenuItem  from "./subMenuItem/SubMenuItems";

const Sidebar = () =>  {
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);
  const [selected, setSelectedMenutItem] = useState(menu[0].links[0].name)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.colorTheme);
  const logoImageClick = () => {
    navigate("/CustomerRelated");
  };


  const handleMenuItemClick = (name: string, link: string) => {
    setSelectedMenutItem(name);
    navigate(link)
  }
  return (
    <styled.baseContainer isSidebarOpen={isSidebarOpen} theme={theme}>
      <styled.headerContainer>
        <styled.headerDiv>
          <styled.logo
            src={logoWhite}
            onClick={() => {
              logoImageClick();
            }}
          ></styled.logo>

          <styled.title>Supplyframe</styled.title>
        </styled.headerDiv>
      </styled.headerContainer>
      {/* Menu Items */}
      <styled.menuContainer>
        {menu.map((item:any) => (
            <>
              <MenuItem key={item.title} title={item.title}/>
              {item.links.map((link:any) => {
                const isItemSelected = selected === link.name;                
                return(
                  <SubMenuItem key={link.name} selected={isItemSelected} title={link.name}  onClick={() => handleMenuItemClick(link.name, `/${link.url}`) } />
              )})}
            </>
        ))}
      </styled.menuContainer>
      <Tooltip title="Close">
                <styled.TogglerContainer onClick={() => dispatch(setSidbarOpen(!isSidebarOpen))}>
                    <styled.Toggler />
                </styled.TogglerContainer >
      </Tooltip>
    </styled.baseContainer>
  );
}

export default Sidebar;
