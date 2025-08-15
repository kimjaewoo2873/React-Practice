import React, { useState, useEffect } from 'react'; // useState와 useEffect 훅을 import 
import useCounter from "./useCounter"; // useCounter 훅을 import

const MAX_CAPACITY = 10; // 최대 용량 상수 정의

function Accommodate() { // Accommodate 컴포넌트 정의
    const [isFull, setIsFull] = useState(false); // false로 초기화된 isFull 상태 정의
    const [count, increaseCount, decreaseCount] = useCounter(0); // useCounter 커스텀훅을 사용하여 count 상태와 증가/감소 함수들을 가져옴

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
    }); // 의존성 배열이 없어 컴포넌트가 렌더링될 때마다 실행되는 useEffect 훅

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); // count가 최대 용량에 도달하면 isFull을 true로 설정
        console.log(`Current count Value: ${count}`);
    }, [count]);  // count가 변경될 때마다 실행되는 useEffect 훅

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용헀습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red"}}>정원이 가득찼습니다.!!</p>}
        </div>
    )
}

export default Accommodate;