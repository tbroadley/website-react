import Header from './header';
import SideProjects from './side-projects';

import React from 'react';

export default class Website extends React.Component {
  render() {
    const sideProjects = [
      {
        name: <code>assert_matches_snapshot</code>,
        description: "A Ruby assertion for snapshot testing.",
        githubUrl: "tbroadley/assert_matches_snapshot",
        externalUrl: "https://rubygems.org/gems/assert_matches_snapshot",
      },
      {
        name: "Twitch Chat Reader",
        description: "A web application that reads chat messages from a Twitch stream out loud as they are sent.",
        externalUrl: "/twitch-chat-reader",
      },
      {
        name: "Rock-Paper-Scissors Kik Bot",
        description: <span>A bot for the Kik messaging app that plays rock-paper-scissors. Built as part of <a href="https://medium.com/boltmades-31-days-of-bots-in-may">Boltmade's 31 Days of Bots in May</a>.</span>,
        githubUrl: "tbroadley/bot-paper-scissors",
        externalUrl: "https://bots.kik.com/#/bot_paper_scissors",
      },
      {
        name: <code>lodash-fp-migrate</code>,
        description: <span>A tool for migrating code that uses <code>lodash</code> to <code>lodash/fp</code>.</span>,
        githubUrl: "tbroadley/lodash-fp-migrate",
        externalUrl: "https://www.npmjs.com/package/lodash-fp-migrate",
      },
      {
        name: "Paneless",
        description: "A browser-based HTML / CSS / JS editor. The output automatically refreshes as you edit. Add and remove rows and columns of panes at will.",
        githubUrl: "tbroadley/paneless",
        externalUrl: "/paneless",
      },
    ]

    return (
      <body>
        <Header>Thomas Broadley</Header>
        <section id="about">
          <h2>About me</h2>
          <p>I am a third-year Computer Science student at the University of Waterloo in Waterloo, Canada.</p>
          <p>I am currently working at Shopify Plus in Waterloo.</p>
        </section>
        <SideProjects sideProjects={sideProjects} />
        <section id="music">
          <h2>Music</h2>
          <p>
            I make music and post it on <a href="https://soundcloud.com/newwworld">Soundcloud</a>.
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
