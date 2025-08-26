import React, { useState } from 'react';
import Greeting from './Greeting';

function ProApp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Jaewoo");

    const changeName = () => {
        const newName = name === "Jaewoo" ? "Good" : "Bad";
        setName(newName);
    };

    const plusCount = () => {
        setCount(count => count + 1);
    }
    return (
        <div style={{ padding: "20px"}}>
            <Greeting name={name} />
            <p>Button clicked {count} times</p>
            <button onClick={() => {plusCount(); changeName();}}>Click Me!</button>
        </div>
    )
};

export default ProApp;