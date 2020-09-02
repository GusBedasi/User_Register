import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './styles.css'

import axios from '../../services/api';

import DeleteButton from '../button/DeleteButton';
import EditButton from '../button/EditButton';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
    textAlign: "center"
  },
  body: {
    fontSize: 14,
    textAlign: "center"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    maxWidth: 1000,
  },
});

export default function SimpleTable() {
    
    const [ users, setUsers ] = useState([]);
    
    function createData(id, name, email) {
      return { id, name, email };
    }

    useEffect(() => {
        axios.get('/index')
        .then(response => {
        setUsers(response.data);  
        })
        .catch(error => {
        console.error(error);
        })
    }, [users])

    const rows = users.map(user => {
        return createData(user.id, user.name, user.email);
    })

    const classes = useStyles();


  return (
    <TableContainer className="table-container">
      <Table className={classes.table}>
        <TableHead>
          <StyledTableRow className="table-row">
            <StyledTableCell className="table-cell">Name:</StyledTableCell>
            <StyledTableCell className="table-cell">E-mail</StyledTableCell>
            <StyledTableCell className="table-cell">Actions</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id} className="table-row">
              <StyledTableCell className="table-cell" component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell className="table-cell">{row.email}</StyledTableCell>
              <StyledTableCell className="table-cell"> <DeleteButton data={row}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
