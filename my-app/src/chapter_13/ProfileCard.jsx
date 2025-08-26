import React from 'react';
import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Jaewoo Kim" backgroundColor="#4ea04e">
            <p>안녕하세요, 저는 김재우입니다.</p> {/* children = 컴포넌트 태그 사이에 들어간 모든 JSX */}
            <p>저는 리액트를 사용해 개발하고 있습니다.</p> {/* Card컴포넌트 안에 들어간 태그들은 모두 Card의 props의 children에 들어간다 */}
        </Card>
    );
}

export default ProfileCard;