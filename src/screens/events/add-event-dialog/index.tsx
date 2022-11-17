// Modules
import { Dialog, DialogTitle, Stack, Button, TextField } from '@mui/material';

// Hooks
import useHandleForm from '../../../hooks/use-handle-form';

// Style
import FlexStyle from '../../../style/flex';
import DialogStyle from '../../../style/dialog';

type Props = {
  isDialogOpen:boolean;
  closeDialog:() => void;
  openItsef: () => void;
}

export default function AddEventDialog (props:Props) {

  const { isDialogOpen, closeDialog } = props;
  const { form, handleOnChange } = useHandleForm(initialState);
  const { title, description, initDate, endDate } = form;
  
  return (
    <Dialog open={isDialogOpen} maxWidth='sm' fullWidth={true} onClose={closeDialog}>
      <DialogTitle>Agregar Evento</DialogTitle>
      <Stack sx={DialogStyle.MainPaddingContainer}>

        <TextField
          label='Título'
          name='title'
          value={title.value}
          onChange={handleOnChange}
        />

        <TextField
          label='Descripción'
          name='description'
          value={description.value}
          onChange={handleOnChange}
        />

        <TextField
          label='Fecha de Inicio'
          name='initDate'
          value={initDate.value}
          onChange={handleOnChange}
          type='date'
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label='Fecha de Finalización'
          name='endDate'
          value={endDate.value}
          onChange={handleOnChange}
          type='date'
          InputLabelProps={{ shrink: true }}
        />

        <Stack sx={FlexStyle.FlexRowColumnGap2}>
          <Button onClick={closeDialog}>Cancelar</Button>
          <Button variant='contained' type='submit'>Guardar Evento</Button>
        </Stack>

      </Stack>
    </Dialog>
  )
}

const initialState = {
  title: {
    value:'',
    error:null
  }, 
  description: {
    value:'',
    error:null
  }, 
  initDate: {
    value:'',
    error:null
  }, 
  endDate: {
    value:'',
    error:null
  }
}