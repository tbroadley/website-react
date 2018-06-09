import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="banner bg-green">
        <div className="banner-body">
          <h1 className="header">
            {this.props.children}
          </h1>
        </div>
      </header>
    );
  }
}
