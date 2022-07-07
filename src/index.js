import ReactDOM from 'react-dom/client';
import React, { useState } from 'react'; 

const App = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const subtract = () => {
        setCount(count - 1);
    }
    
    return <div>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <h1>Count: {count}</h1>
    </div>;
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);