import React from 'react';

class Table extends React.Component {
    render() {
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
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table