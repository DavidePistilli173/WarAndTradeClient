import * as React from 'react';

const NewGame: React.FC<{ setPage: (page_id: String) => void }> = ({ setPage }) => {
    function startGame() {
        setPage('start_game');
    }

    function backToMainMenu() {
        setPage('main_menu');
    }

    return (
        <div>
            <input name='Civilisation name' />
            <button onClick={startGame}>Start</button>
            <button onClick={backToMainMenu}>Back</button>
        </div>
    );
}
export default NewGame;