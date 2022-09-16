import styled from "@emotion/styled";
import Tooltip from '@mui/material/Tooltip';
import { width } from "@mui/system";

type SideBarBaseContainerProps = {
    isSidebarOpen : boolean;
    theme: any;
}

type colorTheme = {
    theme: any;
};

export const baseContainer = styled.div<SideBarBaseContainerProps>`
    position: fixed;
    display: flex;
    //justify-content: space-between;
    flex-direction: column;
    align-items: left;
    padding : 0 10px;
    height: 100vh;
    background : ${props => props.theme.primaryBackgroundColor};
    color: ${props => props.theme.white};
    z-index : 100;
    ${props => props.isSidebarOpen 
        ? 
        `width: 270px;`
        :
        `width: 170px;`
    } 
    transition: ${props => props.theme.transition};

`

//Header of Sidebar
export const headerDiv = styled.div `
    align-items: center;
    gap: 12px;
    margin: 16px 0 0 12px ;
    font-size: 20px;
    line-height: 28px;
    font-weight: 800;
    display: flex;
    letter-spacing: -0.025em;
`

export const headerContainer = styled.div `
    justify-content: space-between;
    display: flex;
    align-items: center;

`

export const logo = styled.img`
    width: 40px;

`

export const title = styled.span`
    color: #fff;

`

//Menu Items
export const menuContainer = styled.div`
    margin-top: 30px;
    height: 100%;

`

///////////////////////////// MENU TOGGLER /////////////////////////////
export const TogglerContainer = styled.div`
        padding: 10px;
        width: 30%;
        right: 0;
        left: 0;
        margin : 0 auto;

`;

export const Toggler = styled.div`
        
        height: 30px;
        cursor: pointer;
        position: relative;
        margin-bottom: 50px;
        &:after{
            content: '';
            position: absolute;
            left: 0;
            top: .25em;
            height: .1em;
            width : 100%;
            background : white;
            box-shadow: 
            0 0.75EM 0 0 #fff,
            0 1.5EM  0 0 #fff;

        }
`