import { createRoot } from 'react-dom/client';
import './app.css';

function MyButton() {
    return (
        <div>
            <button className="avatar">I'm a button</button>
        </div>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Hello from React!!!</h1>
            <MyButton />
        </div>
    );
}

const root = createRoot(document.body);
root.render(MyApp());