// Modules
import { blue, red } from "@mui/material/colors";

const SidebarStyle = {

  MainContainer: {
    height:'100vh',
    backgroundColor:blue[800],
    position: 'fixed'
  },

  MainPaddingContainer: {
    padding:2,
    height:'100%',
    rowGap:2,
    justifyContent:'space-between'
  },

  SectionsContainer: {
    rowGap:2,
  },

  IconContainer: {
    backgroundColor:blue[300],
    borderRadius:2,
    padding:1
  },

  IconColor: {
    color:blue[800],
  },

  LogoutIconContainer: {
    backgroundColor:red[400],
    borderRadius:2,
    padding:1
  },

  LogOutIconColor: {
    color:'white'
  }

}

export default SidebarStyle;