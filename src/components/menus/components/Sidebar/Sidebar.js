import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Badge } from 'reactstrap';

import { userActions } from 'redux/actions/index.js';

import './sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      showBadge: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    const { page } = this.props;
    this.setState({
      activeTab: page
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showBadge: true });
    }, 3000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeTab: nextProps.page
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });

      const { dispatch } = this.props;
      dispatch(userActions.currentPage(tab));
    }
  }

  render() {
    const { activeTab, showBadge } = this.state;

    return (
      <aside className="sidebar position-fixed">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <Link
              to="/home"
              className={`sidebar-nav-link ${
                activeTab === '1' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('1');
              }}
            >
              <i className="fa fa-home fa-fw" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/workflow"
              className={`sidebar-nav-link ${
                activeTab === '2' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('2');
              }}
            >
              <i className="fa fa-bars fa-fw" aria-hidden="true" />
              <span className="sr-only">Workflow</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/raport"
              className={`sidebar-nav-link ${
                activeTab === '3' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('3');
              }}
            >
              <i className="fa fa-line-chart fa-fw" aria-hidden="true" />
              <span className="sr-only">Raport</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/inbox"
              className={`sidebar-nav-link ${
                activeTab === '4' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('4');
              }}
            >
              <i className="fa fa-envelope fa-fw" aria-hidden="true" />
              <span className="sr-only">Inbox</span>
              {showBadge && <Badge color="primary" />}
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/users"
              className={`sidebar-nav-link ${
                activeTab === '5' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('5');
              }}
            >
              <i className="fa fa-users fa-fw" aria-hidden="true" />
              <span className="sr-only">Users</span>
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  const { page } = state.direction;
  return {
    page
  };
};

export default connect(mapStateToProps)(Sidebar);

Sidebar.propTypes = {
  dispatch: PropTypes.func,
  page: PropTypes.string
};
