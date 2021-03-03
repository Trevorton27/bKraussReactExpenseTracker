import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Footer from './components/Footer';
import Table from './components/Table';
import "./Style.css"

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
    }

    handleSubmit(event) {
        event.preventDefault();
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
            expenseArray.push(newExpense);
            console.log(expenseArray);
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

    componentDidMount() {

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
                />
                <Footer />
            </div>
        )
    }
}

export default App