import * as React from 'react';
import MainMenu from './main_menu/main_menu';
import NewGame from './main_menu/new_game';
import Game from './game';
import useWebSocket from 'react-use-websocket/dist';

const WarAndTrade: React.FC = () => {
    useWebSocket('ws://localhost:3000/cmd', {
        share: true,
    });
    useWebSocket('ws://localhost:3000/tlm', {
        share: true,
    });

    const [page, setPage] = React.useState<String>('main_menu');

    const [game_ongoing, setGameOngoing] = React.useState(false);

    let content;
    switch (page) {
        case 'main_menu':
            content = <MainMenu setPage={setPage} />;
            break;
        case 'new_game':
            content = <NewGame setPage={setPage} />;
            break;
        case 'start_game':
            setGameOngoing(true);
            break;
        default:
            content = <MainMenu setPage={setPage} />;
            break;
    }

    return game_ongoing ? (
        <div>
            <Game />
        </div>
    ) : (
        <div>
            {content}
        </div>
    );
}
export default WarAndTrade;