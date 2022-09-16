import React, { useState } from "react";
import * as styled from "./Headerbar.styles";
import Tooltip from "@mui/material/Tooltip";
import logoLight from "../../data/images/logo-dark-blue.png";
import logoDark from "../../data/images/logo-white.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "../userProfile/UserProfile";

import { useAppDispatch, useAppSelector } from "../../redux/reducers/hooks";
import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";
import { darkMode, lightMode } from "../../redux/reducers/colorThemeReducer";

function Headerbar(props: any) {
  const [isUserProfileActive, setIsUserProfileActive] = useState(false);
  
  //Redux State Management
  const theme = useAppSelector((state) => state.colorTheme);
  const dispatch = useAppDispatch();

  const handleUserProfileClick = () => {
    setIsUserProfileActive(!isUserProfileActive);
  };

  const icon =
    theme.currentTheme === "light" ? <HiMoon color={theme.primaryBackgroundColor} size={40} onClick={() => dispatch(darkMode())}/> : <CgSun size={40} onClick={() => dispatch(lightMode())}/>;

  return (
    <styled.HeaderbarContainer theme={theme}>
      <styled.ToggleTheme>{icon}</styled.ToggleTheme>
      <styled.UserProfileContainer onClick={() => handleUserProfileClick()}>
        <Tooltip title="Profile">
          <styled.UserProfileTab theme={theme}>
            <styled.CompanyLogo src={theme.currentTheme === "light" ? logoLight : logoDark} alt="Company Logo" />
              <styled.WelcomeText theme={theme}>
                Welcome back,{" "}
              </styled.WelcomeText>{" "}
              <styled.WelcomeNameText theme={theme}>
                Sam Fourie
              </styled.WelcomeNameText>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </styled.UserProfileTab>
        </Tooltip>
      </styled.UserProfileContainer>
      {isUserProfileActive && <UserProfile />}
    </styled.HeaderbarContainer>
  );
}

export default Headerbar;
