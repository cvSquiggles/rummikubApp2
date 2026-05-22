# Rummikub Match Tracker

A competitive Rummikub match timer and scorekeeping web app built with React.

## Features
- Track scores, round, and turn timers for each player
- Create and track player ids to maintain stats
- Store match data and generate a unique game code allowing the game to be reloaded at any time to resume play.

## Tech Stack
- React
- JavaScript / CSS

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Background
Built as a personal project for tracking more competitive matches of Rummikub with friends and family. I wanted a reason to learn React, and practice my Javascript skills prior to my interview with Clinisys.

I was most proud of how I setup matches to store the players associated with each match along with their scores and remaining times, so that the game could be paused and then reloaded at a later point, even in a different browser session.

If I were to resume work on this, I would make the player creation more robust, instead of just having it be a username that was distinct, I would add password authentication. In addition, I would add a page where users could review their match history and player stats.
