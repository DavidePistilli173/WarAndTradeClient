import * as React from 'react';
import MainMenu from './main_menu/main_menu';
import NewGame from './main_menu/new_game';
import LoadGame from './main_menu/load_game';
import Options from './main_menu/options';
import Game from './game/game';
import useWebSocket from 'react-use-websocket/dist';

const WarAndTrade: React.FC = () => {
    const WS_URL = 'ws://localhost:3000';

    const { sendJsonMessage } = useWebSocket(WS_URL + '/cmd', {
        share: true,
    });
    const { lastJsonMessage } = useWebSocket(WS_URL + '/tlm', {
        share: true,
    });

    const [page, setPage] = React.useState<String>('main_menu');

    function sendCommand(data: JSON) {
        sendJsonMessage(data);
    }

    let content;
    switch (page) {
        case 'main_menu':
            content = <MainMenu setPage={setPage} />;
            break;
        case 'new_game':
            content = <NewGame sendCommand={sendCommand} setPage={setPage} />;
            break;
        case 'load_game':
            content = <LoadGame sendCommand={sendCommand} setPage={setPage} gameFiles={["game_1", "game_2"]} />;
            break;
        case 'start_game':
            content = <Game sendCommand={sendCommand} />;
            break;
        case 'options':
            content = <Options sendCommand={sendCommand} setPage={setPage} />;
            break;
        default:
            content = <MainMenu setPage={setPage} />;
            break;
    }

    return (
        <div>
            {content}
        </div>
    );
}
export default WarAndTrade;