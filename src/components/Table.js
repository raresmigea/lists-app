import React, { Component } from 'react';
import TableRow from './TableRow';
import TableData from './TableData';

class Table extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if (lastCategory !== product.category) {
        rows.push(<TableRow category={product.category} />);
      }
      rows.push(<TableData product={product} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Table;
