import React, {useState} from 'react'; // useState 훅을 import

function useCounter(initialValue) { // useCounter 훅 정의
    const [count, setCount] = useState(initialValue); // count 상태와 setCount 함수를 생성

    const increaseCount = () => setCount((count) => count + 1); // count를 증가시키는 함수
    const decreaseCount = () => setCount((count) => Math.max(count - 1,0)); // count를 감소시키는 함수, 0보다 작아지지 않도록 설정
    
    // 커스텀 훅은 아무거나 반환 가능하지만, 일반적으로 상태와 상태를 변경하는 함수를 반환
    return [count, increaseCount, decreaseCount]; // count와 증가/감소 함수들을 반환
}

export default useCounter;