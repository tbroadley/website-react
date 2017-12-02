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
                ["Name", "Description", "GitHub", "Website"].map(header => <th>{header}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.sideProjects.map(sideProject => (
                <tr>
                  <td>
                    <p>
                      {
                        sideProject.wrapNameInCodeTag ? (
                          <code>{sideProject.name}</code>
                        ) : sideProject.name
                      }
                    </p>
                  </td>
                  <td><p>{sideProject.description}</p></td>
                  <td>
                    {
                      sideProject.githubUrl ? (
                        <p>
                          <a href={"https://github.com/" + sideProject.githubUrl}>
                            <i className="icon-github-circled"></i>
                          </a>
                        </p>
                      ) : <span>&ndash;</span>
                    }
                  </td>
                  <td>
                    {
                      sideProject.externalUrl ? (
                        <p>
                          <a href={sideProject.externalUrl}>
                            <i className="icon-link-ext"></i>
                          </a>
                        </p>
                      ) : <span>&ndash;</span>
                    }
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
