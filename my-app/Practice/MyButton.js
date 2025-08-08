// 리액트 컴포넌트 정의
// MyButton.js
function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {
            onClick: () => setIsClicked(true) },
            isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리액트 컴포넌트를 DOM 컨테이너에 렌더링
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));