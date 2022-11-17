// Modules
import { Stack, Paper, TextField, Button } from '@mui/material';

// Hooks
import useHandleForm from '../../../hooks/use-handle-form';
import useLoginQueries from '../../../queries/use-login-queries';

// Style
import { LoginFormStyle } from './style';

export default function LoginForm () {

  const { form, handleOnChange } = useHandleForm(initialState);
  const { username, password } = form;

  const { useLoginMutation } = useLoginQueries();
  const { mutate, isLoading:isLoadingSubmitLogin } = useLoginMutation();

  function onSubmit (e:any) {
    e.preventDefault();
    const formValues = {
      userName:username.value,
      password:password.value
    }
    mutate(formValues);
  }

  return (
    <Paper sx={LoginFormStyle.MainContainer}>
      <Stack sx={LoginFormStyle.MainPaddingContainer} component='form' onSubmit={onSubmit}>
        <img src='/cis-logo.png' style={LoginFormStyle.LogoStyle}/>
        <TextField 
          label='Nombre de Usuario' 
          name='username' 
          disabled={isLoadingSubmitLogin} 
          onChange={handleOnChange} 
          value={username.value} 
          type='text'
        />
        <TextField 
          label='Contraseña' 
          name='password' 
          disabled={isLoadingSubmitLogin} 
          onChange={handleOnChange} 
          value={password.value} 
          type='password'
        />
        <Button 
          type='submit'
          variant='contained'
        >Ingresar</Button>
      </Stack>
    </Paper>
  )
}

const initialState = {
  username: {
    value:'',
    error:null
  },
  password: {
    value:'',
    error:null
  }
}