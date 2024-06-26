import React from 'react';
import {
  Table as MUITable,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material';

const CustomTable = ({
  containerComponent = Paper,
  tableHead,
  tableBody
}) => {
  const Container = containerComponent;

  return (
    <TableContainer component={Container} {...restProps}>
      <MUITable>
        {tableHead && (
          <TableHead>
            <TableRow>
              {tableHead.map((headCell, index) => (
                <TableCell key={index}>{headCell}</TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        {tableBody && (
          <TableBody>
            {tableBody.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
      </MUITable>
    </TableContainer>
  );
};

export default CustomTable;
