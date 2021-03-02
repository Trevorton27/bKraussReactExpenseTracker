import React from 'react';

function Table(props) {
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
                    {props.tableRow}
                </tbody>
            </table>
        </div>
    )
}


export default Table