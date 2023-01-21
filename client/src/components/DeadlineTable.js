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
  createData('Deadline1', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}>submit </Button>),
  createData('Deadline2', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}>submit </Button>),
  createData('Deadline3', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}>submit </Button>),
  createData('Deadline4', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}>submit </Button>),
  createData('Deadline5', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}>submit </Button>),
  createData('Deadline6', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}>submit </Button>),
  createData('Deadline7', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}>submit </Button>),

];

const DeadlineTable= () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const theme = useTheme();

  return (
    <Paper elevation={0} sx={{ width: '100%', overflow: 'hidden', bgcolor: 'transparent' }}>
    <TableContainer sx={{ maxHeight: 440, color: 'transparent', border:1, borderRadius: '18px', borderColor: 'white' }}>
      <Table stickyHeader aria-label="sticky table" >
        <TableHead sx={{ border: 1 }} >
          <TableRow
          >
            {columns.map((column) => (
              <TableCell
                key={column.label}
                align={column.align}
                style={{ minWidth: column.minWidth, }}

              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ bgcolor: 'transparent', color: "black" }} >
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.workshop}
                sx={{ '&:last-child td, &:last-child th': { borderBottom: 0}, bgcolor: 'transparent' }}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{ bgcolor: 'transparent', color: theme.palette.white }}
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
     {/*  <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        SelectProps={{
          MenuProps: { 
            PaperProps: {
                style:{
                  background: "black"
                }
            }
          } 
        }}
      />*/}
    </Paper>
      ); 
}

export default DeadlineTable;