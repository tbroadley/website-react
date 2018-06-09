import React from 'react';

export default class Section extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="row">
            {
              this.props.columns.map(column => (
                <div className={`col ${column.classes || 'xs-12'}`}>
                  {column.element || column}
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}
