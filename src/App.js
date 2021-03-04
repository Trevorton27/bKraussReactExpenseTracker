import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Table from './components/Table';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            date: "",
            location: "",
            amount: "",
            description: "",
            expenseArray: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteRow = this.deleteRow.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const localStorageExpenseArray = JSON.parse(localStorage.getItem("expenseArray")) || [];
        const isFormFilled = (this.state.date !== "" && this.state.location !== "" && this.state.amount !== "" && this.state.description !== "");
        if (isFormFilled) {
            const expenseArray = this.state.expenseArray
            const newExpense = {
                id: Math.random(),
                date: this.state.date,
                location: this.state.location,
                amount: this.state.amount,
                description: this.state.description,
            }
            localStorageExpenseArray.push(newExpense);
            localStorage.setItem("expenseArray", JSON.stringify(localStorageExpenseArray));
            expenseArray.push(newExpense);
            this.resetForm();
        }
    }

    resetForm() {
        this.setState({
            date: "",
            location: "",
            amount: "",
            description: "",
        })
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    deleteRow(event) {
        const localStorageExpenseArray = JSON.parse(localStorage.getItem("expenseArray"))
        const expenseArray = this.state.expenseArray
        const target = parseFloat(event.target.id);
        for (let i = 0; i < expenseArray.length; i++) {
            if (target === expenseArray[i].id) {
                expenseArray.splice(i, 1);
                localStorageExpenseArray.splice(i, 1);
            }
        }
        this.setState({
            expenseArray: expenseArray,
        });
        localStorage.setItem("expenseArray", JSON.stringify(localStorageExpenseArray));
    }

    componentDidMount() {
        const localStorageExpenseArray = JSON.parse(localStorage.getItem("expenseArray")) || [];
        this.setState({
            expenseArray: localStorageExpenseArray,
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Input
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    data={this.state}
                />
                <Table
                    expenseArray={this.state.expenseArray}
                    deleteRow={this.deleteRow}
                />
            </div>
        )
    }
}

export default App