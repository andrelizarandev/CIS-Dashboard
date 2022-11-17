// Modules
import { Dialog, DialogTitle, Stack, TextField, Button } from '@mui/material';

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

export default function AddSpeakerDialog (props:Props) {

  const { isDialogOpen, closeDialog } = props;

  const { form, handleOnChange } = useHandleForm(initialState);
  const { name, lastname, title, description } = form;

  return (
    <Dialog open={isDialogOpen} maxWidth='sm' fullWidth={true} onClose={closeDialog}>
      <DialogTitle>Agregar Ponente</DialogTitle>
      <Stack sx={DialogStyle.MainPaddingContainer}>
        <TextField
          label='Nombres'
          name='name'
          value={name.value}
          onChange={handleOnChange}
        />
        <TextField
          label='Apellidos'
          name='lastname'
          value={lastname.value}
          onChange={handleOnChange}
        />
        <TextField
          label='Profesión'
          name='title'
          value={title.value}
          onChange={handleOnChange}
        />
        <TextField
          label='Descripción'
          name='description'
          multiline
          rows={4}
          value={description.value}
          onChange={handleOnChange}
        />
        <Stack sx={FlexStyle.FlexRowColumnGap2}>
          <Button onClick={closeDialog}>Cancelar</Button>
          <Button variant='contained' type='submit'>Guardar Ponente</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

const initialState = {
  name: {
    value:'',
    error:null
  }, 
  lastname: {
    value:'',
    error:null
  }, 
  title: {
    value:'',
    error:null
  }, 
  description: {
    value:'',
    error:null
  }
}