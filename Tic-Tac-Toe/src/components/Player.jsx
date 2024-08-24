import { useState } from 'react';

export default function Player({initialName, symbol, isActive}) {
  const [ playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setEdit ] = useState(false);

  function handleClick () {
    setEdit(editing => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let displayedName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    displayedName = <input type="text" value={playerName} onChange={handleChange} placeholder="" required/>
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {displayedName}
        <span className='player-symbol'>{symbol}</span>
      </span>
          <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}