import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types';

export default class Tab extends Component {

  static propTypes = {
    to: PropTypes.string,
    onlyActiveOnIndex: PropTypes.bool,
    children: PropTypes.node
  }

  // pull in the router context
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {

    // determine if the route is active, router.isActive function
    // receives the "to" and onlyActiveOnIndex props
    const isActive = this.context.router.isActive(this.props.to, this.props.onlyActiveOnIndex);

    // if onlyActiveOnIndex is passed then IndexLink is used, else just Link
    const LinkComponent = this.props.onlyActiveOnIndex ? IndexLink : Link;

    // add the bootstrap active class to the active links containing <li>
    const className = isActive ? 'active' : '';

    return (
      <li className={className} >
        <LinkComponent to={this.props.to} >{this.props.children}</LinkComponent>
      </li>
    );
  }
}
