import styled from "@emotion/styled";

type colorTheme = {
    theme: any;
};

///////////////////////HEADER BAR//////////////////////////////////
export const HeaderbarContainer = styled.div<colorTheme>`
    height : 60px;
    width : 100%;
    background-color: ${props => props.theme.headerBackgroundColor};
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transition};
    display: flex;
    justify-content: flex-end;
    padding: 8px;

` 

////////////////////////USER PROFILE TAB/////////////////////////////////
export const UserProfileContainer = styled.div `
    display: flex;  

`

export const UserProfileTab = styled.div<colorTheme>`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 4px;
    border-radius: 8px;
    &:hover{
        background-color: ${props => props.theme.tabHoverBackgroundColor};
    }

`

export const CompanyLogo = styled.img`
    width: 32px;
    height: 32px;

`

export const WelcomeText = styled.span<colorTheme>`
    color: ${props => props.theme.textGrayColor};
    font-size: 14px;

`

export const WelcomeNameText = styled.span<colorTheme>`
    color: ${props => props.theme.textGrayColor};
    font-size: 14px;
    font-weight: 700;

`

export const ToggleTheme = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    &focus {
        outline: none;
    }

`