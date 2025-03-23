import * as React from 'react';

const Options: React.FC<{ sendCommand: (data: JSON) => void, setPage: (page_id: String) => void }> = ({ sendCommand, setPage }) => {
    function backToMainMenu() {
        setPage('main_menu');
    }

    return (
        <div>
            <h1>Options</h1>
            <button onClick={backToMainMenu}>Back</button>
        </div>
    );
}
export default Options;