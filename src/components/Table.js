import React from 'react';

function Table(props) {
    const expenseArray = props.expenseArray
    const tableRow = expenseArray.map(item => {
        return (
            <tr key={item.id}>
                <td className="align-middle">{item.date} </td>
                <td className="align-middle">{item.location}</td>
                <td className="align-middle">${item.amount}</td>
                <td className="align-middle">{item.description}</td>
                <td className="delete-column">
                    <button
                        id={item.id}
                        onClick={props.deleteRow}
                        className="btn btn-danger align-middle btn-sm">
                        X
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <div className="container expense-table">
            <table className="table table-striped table-warning">
                <thead className="table-success">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Location</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Description</th>
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