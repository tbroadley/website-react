import React from 'react';

export default class Card extends React.Component {
  render() {
    const { header, content, footerItems } = this.props;

    return (
      <div class="card shadow-2">
        <div class="card-header bg-light">
          <div class="card-header-title">
            {header}
          </div>
        </div>
        <p class="card-content">
          {content}
        </p>
        <div class="card-footer">
          {
            footerItems.map(footerItem => (
              <div class="card-footer-item">
                {footerItem}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
