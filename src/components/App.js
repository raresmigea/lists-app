import React, { Component } from 'react';
import '../App.css';
import Table from './Table';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SearchBar products={this.props.products} />
        <Table products={this.props.products} />
      </div>
    );
  }
}

export default App;
