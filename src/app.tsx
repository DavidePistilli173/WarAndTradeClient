import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import './app.css';
import WarAndTrade from './war_and_trade';

const MyApp = () => {
    return (
        <div>
            <WarAndTrade />
        </div>
    );
}
export default MyApp;

const root = createRoot(document.body);
root.render(MyApp()); 