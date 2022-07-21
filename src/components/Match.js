import React from 'react';

export default function Match(props) {
  console.log(props.match)
  return <article class="Match">
          <h1>{props.playerOneName} <span>vs</span> {props.playerTwoName}</h1>
          <h2>Player {props.winnerName} is the winner by {props.match.scoreDifference}!</h2>
          <h2>player {props.winnerName} is the winner</h2>
        </article>
  ;
}
