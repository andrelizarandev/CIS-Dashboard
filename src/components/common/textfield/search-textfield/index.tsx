// Modules
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

const SearchTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: grey[50],
    borderRadius:'5px',
    '& fieldset': {
      borderColor: grey[400],
    },
  },
  '& label.Mui-focused': {
    color: blue[800],
  },
});

export default SearchTextField;