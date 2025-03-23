import * as React from 'react';

const LoadGame: React.FC<{ sendCommand: (data: JSON) => void, setPage: (page_id: String) => void, gameFiles: String[] }> = ({ sendCommand, setPage, gameFiles }) => {
    function loadGame() {
        setPage('start_game');
    }

    function backToMainMenu() {
        setPage('main_menu');
    }

    let gameList = gameFiles.map((gameFile) => {
        return <button>{gameFile}</button>;
    });

    return (
        <div>
            <h1>Load Game</h1>
            <ul>{gameList}</ul>
            <button onClick={backToMainMenu}>Back</button>
        </div>
    );
}
export default LoadGame;