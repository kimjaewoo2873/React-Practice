import React from 'react';

const scaleNames = {
    c: '섭씨',
    f: '화씨'
};
// TemperatureInput 컴포넌트는 props로 scale, temperature을 받아서 표시
// state 사용 안하면서, 상위 컴포넌트에서 전달 받은 값(props)만을 사용
function TemperatureInput(props) {
     const handleChange = (event) => {
        props.onTemperatureChange(event.target.value); {/* 사용자가 온도값 변경할때마다, 상위 컴포넌트로 전달*/}
     };  {/* 온도값 변경시, props로 받은 콜백 함수 onTemperatureChange() 실행 */}

     return (
        <fieldset>
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
     );
}

export default TemperatureInput;