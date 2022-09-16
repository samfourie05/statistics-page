import React from 'react'
import Headerbar from '../../components/headerBar/Headerbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useAppSelector } from '../../redux/reducers/hooks'
import DesktopRoutes from '../../routes/DesktopRoutes'
import * as styled from './LayoutController.styles'
function LayoutController(props:any) {

  //variable linking to redux asking for sidebar
  const isSidebarOpen = useAppSelector(state=> state.sidebar.isSidebarOpen);
  const theme = useAppSelector((state) => state.colorTheme);

  return (
    <styled.baseContainer theme={theme}>
        <styled.sidebarContainer>
            <Sidebar/>
        </styled.sidebarContainer>
        <styled.content isSidebarOpen={isSidebarOpen}>
        <styled.headerBar>
            <Headerbar/>
        </styled.headerBar>
            <DesktopRoutes/>
        </styled.content>
    </styled.baseContainer>
  )
}

export default LayoutController