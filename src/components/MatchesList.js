import React from 'react';
import matches from '../data/matchesData';
import Match  from './Match';
import players from '../data/playersData';

export default function MatchesList() {
  const matchArray = matches.map((match) =>{
    console.log(match)
   const winnerId = match.winner 
   let winnerName = "" 
   if(winnerId !== 0){
      winnerName = players[`id${winnerId}`].name
    }
    const playerOneId = match.players[0]
    const playerTwoId = match.players[1] 
    const playerOneName = players[`id${playerOneId}`].name
    const playerTwoName = players[`id${playerTwoId}`].name
    return <Match match ={match} winnerName ={winnerName} playerOneName ={playerOneName} playerTwoName ={playerTwoName}/>
  })
  return <div>
    {matchArray}
  </div>;
}
