import React, {useState} from 'react';

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => { // arrow function으로, 이벤트 핸들러 handleConfirm 정의
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);  // prevIsConfirmed를 사용하여 이전 상태를 반전시킴
    };
        
    return (
            <button
                onClick={handleConfirm}
                disabled={isConfirmed}
            >
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>    
    );
}

export default ConfirmButton;
