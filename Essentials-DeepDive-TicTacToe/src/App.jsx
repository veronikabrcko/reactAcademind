import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Veronika" symbol="X"></Player>
          <Player initialName="Eduardo" symbol="O"></Player>
        </ol>
        Game Board
      </div>
      Log
    </main>
  );
}

export default App;
