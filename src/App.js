import './App.css';
import MatchesList from './components/MatchesList';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className='App'>
      <h1>Fifa Tourney</h1>
      <main>
        <PlayersList />
        <MatchesList />
      </main>
    </div>
  );
}

export default App;
