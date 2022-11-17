// Modules
import { TableRow, TableHead } from '@mui/material';

// Components
import Blue800Header from '../../../components/common/header/blue-800-header';

export default function Header () {
  return (
    <TableHead>
      <TableRow>
        <Blue800Header>Título</Blue800Header>
        <Blue800Header>Descripción</Blue800Header>
        <Blue800Header>Fecha de Inicio</Blue800Header>
        <Blue800Header>Fecha de Finalización</Blue800Header>
        <Blue800Header>Flyer 1</Blue800Header>
        <Blue800Header>Flyer 2</Blue800Header>
        <Blue800Header>Opciones</Blue800Header>
      </TableRow>
    </TableHead>
  )
}