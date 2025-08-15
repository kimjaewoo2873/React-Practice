import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar // Toolbar 컴포넌트 사용
                isLoggedIn={isLoggedIn} // 로그인 상태 전달
                onClickLogin={onClickLogin} // 로그인 버튼 클릭 핸들러 전달
                onClickLogout={onClickLogout} // 로그아웃 버튼 클릭 핸들러 전달   -> props로 전달
            /> {/* 자식이 없으면 한줄로 닫을수 있음 Toolbar 태그 */}
            <div style={{ padding: 16 }}>소플과 함께하는 리엑트 공부!</div>
        </div>
    );
}

export default LandingPage;