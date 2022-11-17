// Modules
import { Stack } from '@mui/material';

// Icons
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// Style
import Style from './style';

export default function Sidebar () {
  return (
    <Stack sx={Style.MainContainer}>
      <Stack sx={Style.MainPaddingContainer}>

        <Stack sx={Style.SectionsContainer}>
          <Stack sx={Style.IconContainer}>
            <EventIcon sx={Style.IconColor}/>
          </Stack>
          <Stack sx={Style.IconContainer}>
            <PeopleIcon sx={Style.IconColor}/>
          </Stack>
          <Stack sx={Style.IconContainer}>
            <CalendarMonthIcon sx={Style.IconColor}/>
          </Stack>
        </Stack>

        <Stack sx={Style.LogoutIconContainer}>
          <LogoutIcon sx={Style.LogOutIconColor}/>
        </Stack>

      </Stack>
    </Stack>
  )
}

