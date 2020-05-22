import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return <tr>{this.props.category.toUpperCase()}</tr>;
  }
}

export default TableRow;
