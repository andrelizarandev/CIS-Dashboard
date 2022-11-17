// Modules
import { useState } from 'react';
import { Button, InputAdornment, IconButton } from '@mui/material';

// Components
import EventsTable from './events-table';
import AddEventDialog from './add-event-dialog';
import MainContainer from '../../components/main-container';

// Hooks
import useHandleDialogs from '../../hooks/use-handle-dialogs';
import useEventsQueries from '../../queries/use-events-queries';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Types
import { EventData } from '../../api/events/types';

export default function EventsScreen () {

  const { closeDialog, isDialogOpen, openDialog } = useHandleDialogs();

  const [ events, setEvents ] = useState<EventData[]>([]);

  const onSuccessGetEvents = (data:EventData[]) => setEvents(data)

  const { useGetEvents } = useEventsQueries();
  const { isLoading:isLoadingGetEvents } = useGetEvents(onSuccessGetEvents);

  function AddSpeakerButton () {
    return (
      <Button 
        variant='contained' 
        startIcon={<AddIcon/>} 
        onClick={openDialog}
      >Nuevo Evento</Button>
    )
  }

  return (
    <>
      <MainContainer  
        buttonAction={<AddSpeakerButton/>}
        title='Eventos'
      >
        <EventsTable events={events} isLoading={isLoadingGetEvents}/>
        <AddEventDialog 
          isDialogOpen={isDialogOpen} 
          closeDialog={closeDialog} 
          openItsef={openDialog} 
        />
      </MainContainer>
    </>
  )
}
