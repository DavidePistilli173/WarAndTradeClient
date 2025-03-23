import * as React from 'react';

const NewGame: React.FC<{ sendCommand: (data: JSON) => void, setPage: (page_id: String) => void }> = ({ sendCommand, setPage }) => {
    function startGame() {
        setPage('start_game');
    }

    function backToMainMenu() {
        setPage('main_menu');
    }

    return (
        <div>
            <h1>New Game</h1>
            <label>Civilisation name:</label>
            <input name='Civilisation name' />
            <button onClick={startGame}>Start</button>
            <button onClick={backToMainMenu}>Back</button>
        </div>
    );
}
export default NewGame;