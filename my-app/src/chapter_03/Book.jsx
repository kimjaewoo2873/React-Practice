// 리액트 함수 컴포넌트
import React from 'react';

function Book(props) { // Book 컴포넌트는 name과 numOfPage라는 두개의 props를 받아 출력하는 컴포넌트
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    )
}

export default Book;