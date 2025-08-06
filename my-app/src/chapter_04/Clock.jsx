import React from "react";

function Clock() { // Clock 컴포넌트는 현재 시간을 표시하는 간단한 컴포넌트입니다. 
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock; // Clock 컴포넌트를 export
