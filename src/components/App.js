import React, { Component } from 'react';
import '../App.css';
import Table from './Table';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }
  render() {
    return (
      <div className='App'>
        <SearchBar
          filterText={this.props.filterText}
          inStockOnly={this.props.inStockOnly}
        />
        <Table products={this.props.products} />
      </div>
    );
  }
}

export default App;
