import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Veronika" symbol="X"></Player>
          <Player initialName="Eduardo" symbol="O"></Player>
        </ol>
        <GameBoard />
      </div>
      Log
    </main>
  );
}

export default App;
