// Modules
import { Grid, Stack } from '@mui/material';

// Components
import LoginForm from './login-form';

// STyle
import { LoginScreenStyle } from './style'

export default function LoginScreen () {
  return (
    <Stack sx={LoginScreenStyle.MainContainer}>
      <Stack sx={LoginScreenStyle.MainPaddingContainer}>
        <Grid sx={LoginScreenStyle.GridContainer} container>
          <Grid xs={0} md={6} lg={8} xl={9}></Grid>
          <Grid xs={12} md={6} lg={4} xl={3}>
            <LoginForm/>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  )
}


