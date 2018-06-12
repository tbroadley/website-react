import React from 'react';

import Card from './card';
import Section from './section';

export default class SideProjects extends React.Component {
  render() {
    return (
      <Section columns={[
        <h2 className="subheader thin">Side projects</h2>,
        ...this.props.sideProjects.map(sideProject => ({
          classes: 'xs-12 sm-6 md-4',
          element: (
            <Card
              header={
                sideProject.wrapNameInCodeTag ? (
                  <code className="inline">{sideProject.name}</code>
                ) : sideProject.name
              }
              content={sideProject.description}
              footerItems={[
                sideProject.githubUrl && <a href={`https://github.com/${sideProject.githubUrl}`}>GitHub</a>,
                sideProject.externalUrl && <a href={sideProject.externalUrl}>Website</a>,
              ].filter(el => el)}
            />
          ),
        })),
      ]}/>
    );
  }
}
