import Player from './components/Player.jsx'
import Gameboard from './components/Gameboard.jsx'

import { useState } from 'react'
function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((previousActivePlayer) => {
      return previousActivePlayer === 'X' ? 'O' : 'X';
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className = "highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player initialName="Player 2" symbol="O" isActive ={activePlayer ==='O'}/>
      </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />


    GAME BOARD
    </div>

    LOG
  </main>


}

export default App
