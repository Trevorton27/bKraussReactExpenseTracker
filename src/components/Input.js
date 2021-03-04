import React from 'react';

function Input(props) {

    return (
        <div className="container form-container">
            <form className="input-field" onSubmit={props.handleSubmit}>
                <div className="form-group row" style={{ marginTop: 20 }}>
                    <label className="col-sm-3 col-form-label">Date:</label>
                    <div className="col-sm-9">
                        <input
                            className="form-control"
                            type="date"
                            name="date"
                            value={props.data.date}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row" style={{ marginTop: 20 }}>
                    <label className="col-sm-3 col-form-label">Location:</label>
                    <div className="col-sm-9">
                        <input
                            className="form-control"
                            type="text"
                            name="location"
                            placeholder="Enter expense location"
                            value={props.data.location}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row" style={{ marginTop: 20 }}>
                    <label className="col-sm-3 col-form-label">Amount:</label>
                    <div className="col-sm-9">
                        <input
                            className="form-control"
                            type="number"
                            name="amount"
                            placeholder="Enter an amount"
                            step="0.01"
                            value={props.data.amount}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row" style={{ marginTop: 20 }}>
                    <label className="col-sm-3 col-form-label">Description:</label>
                    <div className="col-sm-9">
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder="Expense description"
                            value={props.data.description}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-5" style={{ marginTop: 20 }}>
                        <button className="btn btn-success">
                            Add to list
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Input