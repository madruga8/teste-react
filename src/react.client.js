import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

// ReactDOM.render(<Counter />, document.body);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Counter />
);


