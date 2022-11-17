// Modules
import { TableRow, TableHead } from '@mui/material';

// Components
import Blue800Header from '../../../components/common/header/blue-800-header';

export default function Header () {
  return (
    <TableHead>
      <TableRow>
        <Blue800Header>Nombres</Blue800Header>
        <Blue800Header>Apellidos</Blue800Header>
        <Blue800Header>Título</Blue800Header>
        <Blue800Header>Descripción</Blue800Header>
        <Blue800Header>Perfil</Blue800Header>
        <Blue800Header>Portada</Blue800Header>
        <Blue800Header>Visible</Blue800Header>
        <Blue800Header>Opciones</Blue800Header>
      </TableRow>
    </TableHead>
  )
}
