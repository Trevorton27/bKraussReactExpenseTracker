import React from 'react';
import TableRow from './TableRow';

const Table = ({ expenseArray, deleteRow }) => {
  return (
    <div className='container expense-table'>
      <table className='table table-striped table-warning'>
        <thead className='table-success'>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Location</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Description</th>
          </tr>
        </thead>
        <tbody>
          <TableRow expenseArray={expenseArray} deleteRow={deleteRow} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
