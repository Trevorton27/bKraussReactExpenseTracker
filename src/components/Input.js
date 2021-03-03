import React from 'react';

function Input(props) {

    return (
        <div>
            <form className="input-field" onSubmit={props.handleSubmit}>
                <input
                    type="date"
                    name="date"
                    value={props.data.date}
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Enter expense location"
                    value={props.data.location}
                    onChange={props.handleChange}
                />


                <input
                    type="number"
                    name="amount"
                    placeholder="Enter an amount"
                    step="0.01"
                    value={props.data.amount}
                    onChange={props.handleChange}
                />


                <input
                    type="text"
                    name="description"
                    placeholder="Expense description"
                    value={props.data.description}
                    onChange={props.handleChange}
                />


                <button>
                    Add to list
                    </button>
            </form>
        </div>
    )
}

export default Input