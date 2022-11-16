import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles, Menu, styled, useTheme } from '@mui/material';
import Button from '@mui/material/Button';



const columns = [
  { id: 'workshop', label: 'Workshops', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 100 },
  {
    id: 'button',
    label: '',
    minWidth: 100,
    align: 'right'
  },
];

function createData(workshop, date, button) {
  return { workshop, date, button };
}

const rows = [
  createData('Workshop1', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),
  createData('Workshop2', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),
  createData('Workshop3', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),
  createData('Workshop4', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),
  createData('Workshop5', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),
  createData('Workshop6', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),
  createData('Workshop7', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),
  createData('Workshop8', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),
  createData('Workshop9', 'xx/xx/20xx', <Button variant="outlined" sx={{ bgcolor: "#3FFF80", color: "black", borderRadius: 50 }}> join now </Button>),

];

const WorkshopTable = () => {
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
                  key={column.id}
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
   {/*    <TablePagination
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
      />
    </Paper>
  );
}

export default WorkshopTable;