// Modules
import { Table, TableBody, TableContainer, TableRow, TableCell, IconButton, Avatar } from '@mui/material';

// Components
import Header from './header';
import PaperStack from '../../../components/paper-stack';

// Types
import { EventData } from '../../../api/events/types';

type Props = {
  events:EventData[];
  isLoading:boolean;
}

export default function EventsTable (props:Props) {

  const { events, isLoading } = props;

  return (
    <PaperStack isLoading={isLoading} title='Eventos Guardados' >
      <TableContainer>
        <Table>
          <Header/>  
          <TableBody>
            {events.map((event, key) => <Row {...event} key={key}/>)}
          </TableBody>        
        </Table>
      </TableContainer>
    </PaperStack>
  )
}

function Row (props:EventData) {
  const { title, description, initDate, endDate, flyer1, flyer2 } = props;
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{description.slice(0, 50)}</TableCell>
      <TableCell>{initDate}</TableCell>
      <TableCell>{endDate}</TableCell>

      <TableCell>
        <IconButton>
          <Avatar src={flyer1} />
        </IconButton>
      </TableCell>

      <TableCell>
        <IconButton>
          <Avatar src={flyer2} />
        </IconButton>
      </TableCell>

      <TableCell></TableCell>
    </TableRow>
  )
}