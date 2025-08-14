// 리액트 함수 컴포넌트 가져오기, 내부적으로 React.createElement를 쓰기 대문에
import React from 'react';

function Book(props) { // Book 컴포넌트는 부모 컴포넌트가 넘겨준 name과 numOfPage라는 두개의 props를 받아 출력하는 컴포넌트
    // return ( // JSX 문법을 사용하여 HTML 요소를 반환
    //     <div>
    //         <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
    //          <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
    //     </div>
    // )

    return React.createElement( // JSX 문법을 사용하지 않고, React.createElement를 사용하여 HTML요소 생성
        'div', // 타입
        null,  // props는 없므로 null, div 태그에 대한 속성이 없음
        [ // 자식, 자식이 여러개면 배열로 묶어야함
            React.createElement( // h1 태그 생성
                'h1', 
                null, 
                `이 책의 이름은 ${props.name}입니다.` // 자식 문자열 
            ),
            React.createElement( // h2 태그 생성
                'h2',
                null,
                `이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.` // 자식 문자열
            )
        ]
    )
}

export default Book;