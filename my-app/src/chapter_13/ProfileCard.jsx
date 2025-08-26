import React from 'react';
import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Jaewoo Kim" backgroundColor="#4ea04e">
            <p>안녕하세요, 저는 김재우입니다.</p>
            <p>저는 리액트를 사용해 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;