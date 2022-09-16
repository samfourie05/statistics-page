import { MdOutlineCancel } from "react-icons/md";
import React from "react";
import { userProfileData } from "../../tsutil/userProfileData";
import * as styled from "./UserProfile.styles";
import logoDarkBlue from "../../data/images/logo-dark-blue.png";
import logoWhite from "../../data/images/logo-white.png";
import { useAppSelector } from "../../redux/reducers/hooks";

const UserProfile = () => {
  const theme = useAppSelector((state) => state.colorTheme);

  return (
    <styled.UserProfileContainer theme={theme}>
      <styled.UserProfileHeader>
        <styled.UserProfileTitle theme={theme}>
          User Profile
        </styled.UserProfileTitle>
      </styled.UserProfileHeader>
      <styled.UserProfileContentsContainer>
        <styled.UserProfileImage
          src={theme.currentTheme === "light" ? logoDarkBlue : logoWhite}
        />
        <styled.UserProfileUserDataDiv>
          <styled.UserProfileName>Sam Fourie</styled.UserProfileName>
          <styled.UserProfileUserTitle>
            Administrator
          </styled.UserProfileUserTitle>
          <styled.UserProfileUserEmail>
            sfourie@supplyframe.com
          </styled.UserProfileUserEmail>
        </styled.UserProfileUserDataDiv>
      </styled.UserProfileContentsContainer>
      <div>
        {userProfileData.map((item: any, index: any) => (
          <styled.ContentsDiv theme={theme} key={index}>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm"> {item.desc} </p>
            </div>
          </styled.ContentsDiv>
        ))}
      </div>
      <div className="mt-5">
        <styled.UserProfileLogoutButton>Logout</styled.UserProfileLogoutButton>
      </div>
    </styled.UserProfileContainer>
  );
};

export default UserProfile;
