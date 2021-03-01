import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Math.random(),
            date: "",
            location: "",
            amount: "",
            description: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const savedExpenses = JSON.parse(localStorage.getItem('expenseArray')) || [];
        const newExpense = this.state;
        savedExpenses.push(newExpense);
        localStorage.setItem('expenseArray', JSON.stringify(savedExpenses));
        this.setState();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <div>
                <form className="input-field" onSubmit={this.handleSubmit}>
                    <input
                        type="date"
                        name="date"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter expense location"
                        onChange={this.handleChange}
                    />


                    <input
                        type="number"
                        name="amount"
                        placeholder="Enter an amount"
                        step="0.01"
                        onChange={this.handleChange}
                    />


                    <input
                        type="text"
                        name="description"
                        placeholder="Expense description"
                        onChange={this.handleChange}
                    />


                    <button
                        type="submit">
                        Add to list
                    </button>
                </form>
            </div>
        )
    }
}

export default Input