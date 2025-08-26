import React from 'react';

function Card(props) {
    const { title, backgroundColor, children } = props; // 비구조화 사용, 필요한 props만 뽑음, props.title이라고 작성 안 해도 괜찮

    return (
        <div style={{
            margin: 8,
            padding: 8,
            borderRadius: 8, 
            boxShadow: "0px 0px 4px grey",
            backgroundColor: backgroundColor || "white", // Specialization 
        }}>
            {title && <h1>{title}</h1>} {/* Specialization */}
            {children} {/* Containment */}
        </div>
    );
}

export default Card;