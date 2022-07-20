import React from 'react';
import players from '../data/playersData';
import matches from '../data/matchesData';
import Player from './Player';

export default function PlayersList() {
  const newPlayersObj = {};
  Object.values(players).forEach((player) => {
    const newPlayer = { ...player };
    newPlayer.wins = 0;
    newPlayersObj[`id${player.id}`] = newPlayer;
  });
  matches.forEach((match) => {
    if (match.winner !== 0) {
      let winnerPlayer;
      // if winner player is in new players obj
      if (newPlayersObj[`id${match.winner}`]) {
        // get player obj from newPlayersObj
        winnerPlayer = { ...newPlayersObj[`id${match.winner}`] };
      } else {
        // if not, get player from original data
        winnerPlayer = { ...players[`id${match.winner}`] };
      }
      // if winner player has not wins property
      if (!winnerPlayer.wins) {
        // add wins = 1
        winnerPlayer.wins = 1;
      } else {
        // add 1 more win
        winnerPlayer.wins++;
      }
      // assign winner player obj into newPlayersObj
      newPlayersObj[`id${match.winner}`] = { ...winnerPlayer };
    }
  });
  console.log('players', players);
  const playersArr = Object.values(newPlayersObj).map((player) => {
    return <Player player={player} />;
  });
  return (
    <section className='PlayerList'>
      <h1>Current participant players</h1>
      {playersArr}
    </section>
  );
}
