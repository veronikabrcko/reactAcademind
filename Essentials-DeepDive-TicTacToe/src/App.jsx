import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Veronika" symbol="X"></Player>
          <Player name="Eduardo" symbol="O"></Player>
        </ol>
        Game Board
      </div>
      Log
    </main>
  );
}

export default App;
