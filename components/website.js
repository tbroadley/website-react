import Header from './header';
import SideProjects from './side-projects';

import React from 'react';

export default class Website extends React.Component {
  render() {
    const sideProjects = [
      {
        name: "GitHub Spellcheck CLI",
        description: "A tool for checking GitHub repositories for spelling errors and submitting PRs to fix them. So far, I've used it to fix typos in over 90 repos.",
        githubUrl: "tbroadley/github-spellcheck-cli",
      },
      {
        name: "Rock-Paper-Scissors Kik Bot",
        description: <span>A bot for the Kik messaging app that plays rock-paper-scissors. Built as part of <a href="https://medium.com/boltmades-31-days-of-bots-in-may">Boltmade's 31 Days of Bots in May</a>.</span>,
        githubUrl: "tbroadley/bot-paper-scissors",
        externalUrl: "https://bots.kik.com/#/bot_paper_scissors",
      },
      {
        name: "lodash-fp-migrate",
        wrapNameInCodeTag: true,
        description: <span>A tool for migrating code that uses <a href="https://github.com/lodash/lodash"><code>lodash</code></a> to <a href="https://github.com/lodash/lodash/wiki/FP-Guide"><code>lodash/fp</code></a>.</span>,
        githubUrl: "tbroadley/lodash-fp-migrate",
        externalUrl: "https://www.npmjs.com/package/lodash-fp-migrate",
      },
      {
        name: "Gatekeepify",
        description: (
          <span>
            YOU 👏 DON'T 👏 GET 👏 TO 👏 GATEKEEP 👏 IF 👏 YOU'RE 👏 NOT 👏 USING 👏 GATEKEEPIFY 😤.
            Built for <a href="https://terriblehack6.devpost.com/">TerribleHack the 6ix</a>.
          </span>
        ),
        githubUrl: "tbroadley/tbroadley.github.io/tree/master/gatekeepify",
        externalUrl: "/gatekeepify",
      },
    ]

    return (
      <body>
        <Header>Thomas Broadley</Header>
        <section id="about">
          <h2>About me</h2>
          <p>I am a fourth-year Computer Science student at the University of Waterloo in Waterloo, Canada.</p>
          <p>
            I've worked at <a href="https://zeitspace.com/">Zeitspace</a>, <a href="https://www.shopify.ca/plus">Shopify Plus</a>, and <a href="http://old.boltmade.com/">Boltmade</a> (since acquired by Shopify).
          </p>
          <p>I'll be working at <a href="https://datadoghq.com">Datadog</a> in New York City this summer.</p>
        </section>
        <SideProjects sideProjects={sideProjects} />
        <section id="music">
          <h2>Music</h2>
          <p>
            I make music and post it on <a href="https://soundcloud.com/newwworld">SoundCloud</a>.
          </p>
        </section>
        <section id="contact">
          <h2>Contact me</h2>
          <ul>
            <li>
              <a href="mailto:buriedunderbooks@hotmail.com">
                Email
              </a>
            </li>
          </ul>
        </section>
      </body>
    );
  }
}
