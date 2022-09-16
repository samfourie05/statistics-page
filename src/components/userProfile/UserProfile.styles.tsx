import styled from "@emotion/styled";

type colorTheme = {
    theme: any;
  };

export const UserProfileContainer = styled.div<colorTheme>`
    position: absolute;
    right: 4px;
    top: 64px;
    background-color: ${props => props.theme.userProfileBackgroundColor};
    padding: 32px;
    border-radius: 8px;
    width: 384px;
    z-index: 9999;

`

export const UserProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const UserProfileTitle = styled.p<colorTheme>`
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.theme.textColor};

`

export const UserProfileContentsContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 24px;
    border-color: #E6E6E6;
    border-bottom-width: 1px;
    padding-bottom: 24px;

`

export const UserProfileImage =styled.img`
    height: 96px;
    width: 96px;

`

export const UserProfileUserDataDiv = styled.div`
    

`

export const UserProfileName = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

`

export const UserProfileUserTitle = styled.p`
    font-size: 14px;
    line-height: 20px;

`

export const UserProfileUserEmail = styled.p`
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;

`

export const ContentsDiv = styled.div<colorTheme>`
    display: flex;
    gap: 20px;
    border-bottom-width: 1px;
    padding: 16px;
    cursor: pointer;
    &:hover{
       background-color: ${props => props.theme.userProfileContentsTabHoverColor};
    }


`
////////////////////////// LOGGING OFF //////////////////////////////////////
export const UserProfileLogoutButton = styled.div`
    color: red;
    width: 100%;
    justify-content: center;
    display: flex;
    cursor: pointer;
`