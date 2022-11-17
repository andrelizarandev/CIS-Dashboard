// Modules
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const Blue800Header = styled(TableCell)(() => ({
  textTransform:'uppercase', 
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: blue[700],
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default Blue800Header;