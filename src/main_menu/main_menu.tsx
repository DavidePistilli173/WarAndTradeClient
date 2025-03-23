import * as React from 'react';
import useWebSocket from 'react-use-websocket/dist';
import NewGame from './new_game';

const MainMenu: React.FC<{ setPage: (page_id: String) => void }> = ({ setPage }) => {
    function newGame() {
        setPage('new_game');
    }

    function loadGame() {
        setPage('load_game');
    }

    function options() {
        setPage('options');
    }

    function exit() {
        setPage('exit');
    }

    return (
        <div>
            <h1 className="main_menu_title">War And Trade</h1>
            <button className="main_menu_button" onClick={newGame}>New Game</button>
            <button className="main_menu_button" onClick={loadGame}>Load Game</button>
            <button className="main_menu_button" onClick={options}>Options</button>
            <button className="main_menu_button" onClick={exit}>Exit</button>
        </div>
    );
};
export default MainMenu;