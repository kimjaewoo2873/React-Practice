import React from 'react'; 

const students = [
    {
        id: 1,
        name: "Jaewoo",
    },
    {
        id: 2,
        name: "Ronaldo",
    },
    {
        id: 3,
        name: "Messi",
    },
    {
        id: 4,
        name: "Son",
    },
];

function AttendanceBook(props) { 
    return (
        <ul>
            {students.map((student) => { 
                return <li key={student.id}>{student.name}</li> 
            })}
        </ul>
    );
}

export default AttendanceBook; 