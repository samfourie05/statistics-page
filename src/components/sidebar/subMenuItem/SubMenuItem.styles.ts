import styled from "@emotion/styled";

type SubMenutItemContainerProps = {
    isActive: boolean;
}
export const SubMenuItemContainer = styled.div<SubMenutItemContainerProps>`
    margin-top:20px;
    margin-bottom: 15px;
    cursor: pointer;
    display: flex;
    height: 45px;
    width: 80%;
    margin-left: 5%;
    justify-content: left;
    align-items: center;
    ${props => props.isActive && 
        `border-left-style: solid;
        border-left-color : white;
        border-left-width: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;`
    }

    &&:hover{
        border-left-style: solid;
        border-left-color : white;
        border-left-width: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    `

export const SubMenuItem = styled.div`
    padding-left: 10px;
`