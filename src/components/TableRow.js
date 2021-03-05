import React from 'react';

const TableRow = ({ expenseArray, deleteRow }) => {
  //   const expenseArray = props.expenseArray;
  return expenseArray.map((item) => {
    return (
      <tr key={item.id} className='tableRow'>
        <td className='align-middle'>{item.date} </td>
        <td className='align-middle'>{item.location}</td>
        <td className='align-middle'>${item.amount}</td>
        <td className='align-middle'>{item.description}</td>
        <td className='delete-column'>
          <button
            id={item.id}
            onClick={(e) => deleteRow(item.id)}
            className='btn btn-danger align-middle btn-sm'
          >
            X
          </button>
        </td>
      </tr>
    );
  });
};

export default TableRow;
