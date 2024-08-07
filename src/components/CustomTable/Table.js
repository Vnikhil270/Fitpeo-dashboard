import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Chip } from "@mui/material";

const columns = [
  { id: "customer", label: "Customer", minWidth: 170 },
  { id: "orderNo", label: "Order\u00a0No.", minWidth: 170 },
  { id: "amount", label: "Amount", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
];

function createData(customer, orderNo, amount, status) {
  return { customer, orderNo, amount, status };
}

const rows = [
  createData("Wade Warren", "3287263", "$1353.20", "Delivered"),
  createData("John", "17287263", "$7353.20", "Cancellled"),
  createData("Mathew", "7787263", "$853", "Pending"),
  createData("Allen Walker", "3282763", "$288.540", "Delivered"),
  createData("Gimmy Johnson", "328874", "$1353.25", "Delivered"),
];

export default function CustomTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden", background: "transparent" }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return column.id === "status" ? (
                        <TableCell key={column.id} align={column.align}>
                          <Chip
                            label={value}
                            sx={{
                              color: value === "Delivered" ? "#05A879" : "#D15855",
                              background:
                                value === "Delivered" ? "#155045" : "#5D3236",
                            }}
                          />
                        </TableCell>
                      ) : (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
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
        rowsPerPageOptions={[10, 25, 100]}
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
