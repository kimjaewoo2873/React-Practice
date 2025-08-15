import React from "react";

const styles = {
    wrapper: {
        padding: 16, // 안쪽 여백 16px
        display: "flex", // flexbox 레이아웃 사용
        flexDirection: "row", // 가로 방향으로 배치
        borderBottom: "1px solid grey", // 아래쪽 테두리 1px 회색 실선 
    }, // wrapper 스타일 정의, 컴포넌트의 바깥쪽을 감사는 박스에 적용하는 스타일
    greeting: {  
        marginRight: 8,
    },
};

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props; // props에서 isLoggedIn, onClickLogin, onClickLogout 추출

    return (
        <div style={styles.wrapper}> {/* wrapper 스타일 적용 */}             
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}  {/* isLoggedIn이 true일 때만 환영 메세지 표시 */}
                                                                            {/* 로그인 상태에 따른 버튼 표시 */}                                                    
            {isLoggedIn ? (<button onClick={onClickLogout}>로그아웃</button>) : (<button onClick={onClickLogin}>로그인</button>)} 
        </div>
    )
}

export default Toolbar;