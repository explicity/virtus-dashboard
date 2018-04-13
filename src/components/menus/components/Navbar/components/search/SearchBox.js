import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { InputGroup, Input } from 'reactstrap';

import './searchBox.scss';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { isOpen: false };
  }

  onClick() {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.updateData();
  }

  handleKeyDown(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
    }
  }

  render() {
    const baseStyles = {
      open: {
        width: 150,
      },

      closed: {
        width: 0,
        padding: 0
      }
    };

    const baseDivStyles = {
      open: {
        width: 180,
        marginRight: 0
      },

      closed: {
        width: 20
      }
    };

    const textStyle = this.state.isOpen ? baseStyles.open : baseStyles.closed;
    const divStyle = this.state.isOpen ? baseDivStyles.open : baseDivStyles.closed;

    return (
      <div className="search-box" style={divStyle}>
        <button className="navbar-main-btn mr-2" onClick={this.onClick}>
          <i
            aria-hidden="true"
            className={`fa fa-search ${this.state.isOpen ? 'open' : ''}`}
          />
          <span className="sr-only">Search</span>
        </button>
        <InputGroup style={textStyle}>
          <Input
            placeholder="Search"
            onKeyDown={this.handleKeyDown}
            style={textStyle}
          />
        </InputGroup>
      </div>
    );
  }
}

export default SearchBox;

SearchBox.propTypes = {
  updateData: PropTypes.func
};
