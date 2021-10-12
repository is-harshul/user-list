import React, { Component } from 'react'
import './styles.scss';

export default class Initials extends Component {
  getInitials = (name) => {
    const initials = (name + "").trim().split(" ").reduce((acc, val) => { acc += val[0]; return acc; }, "");
    return initials.toLocaleUpperCase();
  }

  render() {
    const { name = "" } = this.props;

    return (
      <>
        <div className={`initials-picture-wrapper`}>
          {this.getInitials(name)}
        </div>
      </>
    )
  }
}
