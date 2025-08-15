import React, {useState} from 'react';

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => { // arrow function으로 handleConfirm 정의
        setIsConfirmed((good) => !good); 
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
