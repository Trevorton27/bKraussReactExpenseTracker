import React from 'react';

function Table(props) {

    const expenseArray = props.expenseArray
    const tableRow = expenseArray.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.date} </td>
                <td>{item.location}</td>
                <td>{item.amount}</td>
                <td>{item.description}</td>
            </tr>
        )
    })

    return (
        <div className="expense-display">
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Amount</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow}
                </tbody>
            </table>
        </div>
    )
}

export default Table