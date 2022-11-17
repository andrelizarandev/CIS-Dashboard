// Module
import { ReactNode } from 'react';
import { Paper, Stack, Typography } from '@mui/material';

// Components
import { TableSkeleton } from '../table-skeleton';

// Style
import Style from './style';

type Props = {
  children:ReactNode;
  title:string;
  isLoading:boolean;
}

export default function PaperStack (props:Props) {

  const { isLoading, title, children } = props;

  return (
    <Paper>
      <Stack sx={Style.MainPaddingContainer}>
        <Typography variant='h6'>{title}</Typography>
        {isLoading ? <TableSkeleton/> : children}
      </Stack>
    </Paper>
  )
}
