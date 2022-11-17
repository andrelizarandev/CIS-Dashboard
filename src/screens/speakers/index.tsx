// Modules
import { useState } from 'react';
import { Button, InputAdornment, IconButton } from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

// Components
import SpeakersTable from './speakers-table';
import AddSpeakerDialog from './add-speaker-dialog';
import MainContainer from '../../components/main-container';
import SearchTextField from '../../components/common/textfield/search-textfield';

// Hooks
import useHandleDialogs from '../../hooks/use-handle-dialogs';
import useSpeakersQueries from '../../queries/use-speakers-queries';

// Types
import { SpeakerData } from '../../api/speakers/types';

export default function SpeakersScreen () {

  const { closeDialog, isDialogOpen, openDialog } = useHandleDialogs();

  const [speakers, setSpeakers] = useState<SpeakerData[]>([]);

  const onSuccessGetSpeakers = (data:SpeakerData[]) => setSpeakers(data);

  const { getSpeakersQuery } = useSpeakersQueries();
  const { isLoading:isLoadingGetSpeakers } = getSpeakersQuery(onSuccessGetSpeakers);


  function AddSpeakerButton () {
    return (
      <Button 
        variant='contained' 
        startIcon={<AddIcon/>} 
        onClick={openDialog}
      >Nuevo Ponente</Button>
    )
  }

  function SearchField () {
    return (
      <SearchTextField 
        label='Buscar por Nombre' 
        InputProps={{
          endAdornment: 
            <InputAdornment position="end">
              <IconButton>
                <ClearIcon/>
              </IconButton>
            </InputAdornment>,
        }}
      />
    )
  }

  return (
    <>
      <MainContainer  
        buttonAction={<AddSpeakerButton/>}
        title='Ponentes'
      >
        <SpeakersTable speakers={speakers} isLoading={isLoadingGetSpeakers}/>
      </MainContainer>
      <AddSpeakerDialog 
        isDialogOpen={isDialogOpen} 
        closeDialog={closeDialog}
        openItself={openDialog}
      />
    </>
  )
}