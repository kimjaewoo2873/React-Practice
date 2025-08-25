import React,{useState} from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit) { // 섭씨 변경
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) { // 화씨 변경
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) { // convert는 고정된 함수가 아니라, 넘겨받은 함수를 가리키는 변수
    const input = parseFloat(temperature); // 입력값 숫자로 변환
    if(Number.isNaN(input)) { // 숫자가 아닌 값 입력시 empty String 리턴, 예외처리
        return '';
    }
    const output = convert(input); // 그래서 convert()를 실행하면, 그때 넘겨준 함수(toCelsius 또는 toFahrenheit)가 실행됨
    const rounded = Math.round(output + 1000) / 1000; // 소수점 반올림
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div> {/* 각 단위로 변환된 온도값과 단위를 props로 넣어줌, 값 변경시 onTemperatureChange 함수 호출*/}
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius = {parseFloat(celsius)} />
        </div>
    )
}

export default Calculator;