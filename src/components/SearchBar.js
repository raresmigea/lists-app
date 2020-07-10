import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.state = {
      background: '#FFFFFF',
    };
  }

  handleChange = (color) => {
    this.setState({ background: color.hex });
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <ChromePicker
        color={this.state.background}
        onChange={this.handleChange}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}

export default SearchBar;
