import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {this.props.products.map((product) => {
          return <div>{product.category}</div>;
        })}
      </div>
    );
  }
}

export default App;
