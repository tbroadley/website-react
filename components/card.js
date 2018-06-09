import React from 'react';

export default class Card extends React.Component {
  render() {
    const { header, content, footerItems } = this.props;

    return (
      <div className="card shadow-2">
        <div className="card-header bg-light">
          <div className="card-header-title">
            {header}
          </div>
        </div>
        <p className="card-content">
          {content}
        </p>
        <div className="card-footer">
          {
            footerItems.map(footerItem => (
              <div className="card-footer-item">
                {footerItem}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
