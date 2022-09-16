import styled from "@emotion/styled";

type colorTheme = {
    theme: any;
};

export const baseContainer = styled.div<colorTheme>`
height: 100%;
width: 100%;
//here is where it applies
background : ${props => props.theme.secondaryBackgroundColor};
display : flex;
transition: ${props => props.theme.transition};

`

export const headerBar = styled.div`

`

export const sidebarContainer = styled.div`

`

type ContentProps = {
    isSidebarOpen: boolean
}

export const content = styled.div<ContentProps>`
display: flex;
flex-direction: column;
height: 100%;
width: 100%; 
${props=> props.isSidebarOpen ? 'margin-left: 270px;' : 'margin-left: 170px;'}
transition: 0.2s ease-in all; 

`
