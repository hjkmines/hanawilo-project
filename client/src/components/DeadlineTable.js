import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { bgcolor } from '@mui/system';


const columns = [
  { id: 'deadline', label: 'Deadlines', minWidth: 100 },
  { id: 'dateDue', label: 'Date Due', minWidth: 100 },
  {
    id: 'button',
    label: '',
    minWidth: 100,
    align: 'right'
  },
];

function createData( deadline, dateDue, button) {
  return { deadline, dateDue, button };
}

const rows = [
  createData('Deadline1', 'xx/xx/20xx', <Button variant="outlined" sx={{bgcolor:"#A5E6BA", color:"white"}}> press me </Button>),
  createData('Deadline2', 'xx/xx/20xx', <Button variant="outlined" sx={{bgcolor:"#A5E6BA", color:"white"}}> press me </Button>),
  createData('Deadline3', 'xx/xx/20xx', <Button variant="outlined" sx={{bgcolor:"#A5E6BA", color:"white"}}> press me </Button>),
  createData('Deadline4', 'xx/xx/20xx', <Button variant="outlined" sx={{bgcolor:"#A5E6BA", color:"white"}}> press me </Button>),
  createData('Deadline5', 'xx/xx/20xx', <Button variant="outlined" sx={{bgcolor:"#A5E6BA", color:"white"}}> press me </Button>),
  createData('Deadline6', 'xx/xx/20xx', <Button variant="outlined" sx={{bgcolor:"#A5E6BA", color:"white"}}> press me </Button>),
  createData('Deadline7', 'xx/xx/20xx', <Button variant="outlined" sx={{bgcolor:"#A5E6BA", color:"white"}}> press me </Button>),

];

const DeadlineTable= () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const theme = useTheme();

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', bgcolor:theme.palette.lightPurple }}>
      <TableContainer sx={{ maxHeight: 440, color:theme.palette.white }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{bgcolor:theme.palette.lightPurple}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: theme.palette.medPurple, color:"white"}} >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.deadline} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell 
                            key={column.id} 
                            align={column.align}
                            sx={{bgcolor:theme.palette.medPurple, color:theme.palette.white}}
                            >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default DeadlineTable;