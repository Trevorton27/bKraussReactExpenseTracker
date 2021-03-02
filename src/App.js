import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Footer from './components/Footer';
import Table from './components/Table';

class App extends React.Component {
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
                <Header />
                <Input
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Table />
                <Footer />
            </div>
        )
    }
}

export default App