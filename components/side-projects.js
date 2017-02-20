import React from 'react';

export default class SideProjects extends React.Component {
  render() {
    return (
      <section id="side-projects">
        <h2>Side projects</h2>
        <table>
          <thead>
            <tr>
              {
                ["Name", "Description", "Github", "Website"].map(header => <th>{header}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.sideProjects.map(sideProject => (
                <tr>
                  <td><p>{sideProject.name}</p></td>
                  <td><p>{sideProject.description}</p></td>
                  <td>
                    <p>
                      {
                        sideProject.githubUrl ? (
                          <a href={"https://github.com/" + sideProject.githubUrl}>
                            <i className="icon-github-circled"></i>
                          </a>
                        ) : <span>&ndash;</span>
                      }
                    </p>
                  </td>
                  <td>
                    <p>
                      {
                        sideProject.externalUrl ? (
                          <a href={sideProject.externalUrl}>
                            <i className="icon-link-ext"></i>
                          </a>
                        ) : <span>&ndash;</span>
                      }
                    </p>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    );
  }
}
