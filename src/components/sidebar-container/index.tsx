// Modules
import { ReactNode } from 'react';
import { Stack } from '@mui/material';

// Components
import Sidebar from './sidebar';

// Style
import Style from './style';

type Props = {
  children:ReactNode;
}

export default function SidebarContainer (props:Props) {
  return (
    <>
      <Sidebar/>
      <Stack sx={Style.MainContainer}>
        <Stack sx={Style.MainPaddingContainer}>
          {props.children}
        </Stack>
      </Stack>
    </>
  )
}
