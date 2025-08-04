import React from 'react';
import Book from './Book'; // Book 컴포넌트를 import
 // Library 이름의 리액트 함수 컴포넌트, 3개의 Book 컴포넌트를 렌더링
function Library(props) {
    return (
        <div>
            <Book name="귀멸의 칼날" numOfPage={1300} />
            <Book name="원피스" numOfPage={1000} />
            <Book name="나루토" numOfPage={1200} /> 
        </div>
    );
}

export default Library; // Library 컴포넌트를 export
