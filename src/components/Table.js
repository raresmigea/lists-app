import React, { Component } from 'react';

class Table extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if (lastCategory !== product.category) {
        rows.push(product.category.toUpperCase());
      }
      rows.push(<div>{product.name + ' ' + product.price}</div>);
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
