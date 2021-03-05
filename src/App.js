import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Table from './components/Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      location: '',
      amount: '',
      description: '',
      expenseArray: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newExpense = {
      id: Math.random(),
      date: this.state.date,
      location: this.state.location,
      amount: this.state.amount,
      description: this.state.description
    };

    this.setState({
      expenseArray: [...this.state.expenseArray, newExpense],
      date: '',
      location: '',
      amount: '',
      description: ''
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  deleteRow(id) {
    const expenseDeleted = this.state.expenseArray.filter(
      (expense) => expense.id !== id
    );

    this.setState({
      expenseArray: expenseDeleted
    });
  }

  componentDidMount() {
    const localStorageExpenseArray =
      JSON.parse(localStorage.getItem('expenseArray')) || [];
    this.setState({
      expenseArray: localStorageExpenseArray
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenseArray !== prevState.expenseArray.length) {
      localStorage.setItem(
        'expenseArray',
        JSON.stringify(this.state.expenseArray)
      );
    }
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
    );
  }
}

export default App;
