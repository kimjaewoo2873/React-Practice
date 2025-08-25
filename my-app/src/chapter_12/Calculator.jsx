import React from 'react';

function Calculator(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
            <lengend>섭씨 온도를 입력하세요:</lengend>
            <input
                value={temperature} onChange={handleChange} />
                aaaaaaa<BoilingVerdict celsius={parseFloat(temperature)} />
                
        </fieldset>
    )
}