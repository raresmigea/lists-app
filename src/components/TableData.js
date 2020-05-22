import React, { Component } from 'react';

class TableData extends Component {
  render() {
    const stock = this.props.product.stocked;
    const name = stock ? (
      this.props.product.name
    ) : (
      <span style={{ color: 'red' }}> {this.props.product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default TableData;
