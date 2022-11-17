// Modules
import { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

// Components
import SidebarContainer from '../sidebar-container';

// Style
import { MainContainerStyle } from './style';

type Props = {
  buttonAction: ReactNode;
  title:string;
  children:ReactNode;
}

export default function MainContainer (props:Props) {

  const { title, buttonAction, children } = props;

  return (
    <SidebarContainer>
      <Stack sx={MainContainerStyle.MainContainer}>
        <Stack sx={MainContainerStyle.MainPaddingContainer}>
          <Stack sx={MainContainerStyle.MainTitleContainer}>
            <Typography variant='h5'>{title}</Typography>
            {buttonAction}
          </Stack>
          {children}
        </Stack>
      </Stack>
    </SidebarContainer>
  )
}
