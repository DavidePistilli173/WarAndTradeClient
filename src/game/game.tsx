import * as React from 'react';

const Game: React.FC<{ sendCommand: (data: JSON) => void }> = ({ sendCommand }) => {
    const [game_ongoing, setGameOngoing] = React.useState(false);

    return (
        <div>
            <h1>Game</h1>
        </div>
    );
}

export default Game;