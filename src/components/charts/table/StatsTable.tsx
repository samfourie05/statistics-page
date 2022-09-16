import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as ourStyled from "./StatsTable.styles";
import { useAppSelector } from "../../../redux/reducers/hooks";

interface CustomerActivityData {
  category: string;
  value: number;
}

export default function StatsTables(tableData:any) {
  const ourTheme = useAppSelector((state) => state.colorTheme);
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: ourTheme.primaryBackgroundColor,
      color: ourTheme.white,
      transition: ourTheme.transition,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      backgroundColor: ourTheme.tableBackgroundColor,
      color: ourTheme.textColor,
      transition: ourTheme.transition,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const rows = tableData.data.chartData;

  if (rows == null) {
    return <></>
  }
  return (
    <ourStyled.TableDiv id={tableData.chartID}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Value</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row:any) => (
              <StyledTableRow key={row.category}>
                <StyledTableCell component="th" scope="row">
                  {row.category}
                </StyledTableCell>
                <StyledTableCell align="right">{row.value}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ourStyled.TableDiv>
  );
}
