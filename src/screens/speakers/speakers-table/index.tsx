// Modules
import { TableContainer, Table, TableBody, TableRow, TableCell, Avatar, IconButton } from '@mui/material';

// Components
import Header from './header';
import PaperStack from '../../../components/paper-stack';

// Types
import { SpeakerData } from '../../../api/speakers/types';

type Props = {
  speakers:SpeakerData[];
  isLoading:boolean;
}

export default function SpeakersTable (props:Props) {
  const { speakers, isLoading } = props;
  return (
    <PaperStack title='Ponentes Guardados' isLoading={isLoading}>
      <TableContainer>
        <Table>
          <Header/>
          <TableBody>
            {speakers.map((speaker, key) => <Row {...speaker} key={key}/>)}
          </TableBody>
        </Table>
      </TableContainer>
    </PaperStack>
  )
}

function Row (props:SpeakerData) {
  const { coverPhoto, description, firstName, lastName, profilePhoto, title, visible } = props;
  return (
    <TableRow>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>
        <IconButton>
          <Avatar src={profilePhoto} />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton>
          <Avatar src={coverPhoto} />
        </IconButton>
      </TableCell>
      <TableCell>{visible ? 'Visible' : 'No Visible'}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  )
}