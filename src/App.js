import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Footer from './components/Footer';
import Table from './components/Table';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Input />
                <Table />
                <Footer />
            </div>
        )
    }
}

export default App