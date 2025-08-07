import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
    {   
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {   
        id: 2,
        message: "점심 식사 시간입니다.",
    },
    {   
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            notifications: [], // 초기 상태로 빈 배열 설정
        };
    }

    componentDidMount() { // 컴포넌트 마운트시 호출
        const { notifications } = this.state; // 초기 상태의 notifications 배열
        timer = setInterval(() => { // 1초마다 실행되는 타이머 설정
            if(notifications.length < reservedNotifications.length) { // reservedNotifications 배열의 길이보다 작을때만 실행
                const index = notifications.length; // 현재 notifications 배열의 길이를 인덱스로 사용
                notifications.push(reservedNotifications[index]); // reservedNotifications 배열에서 해당 인덱스를 추가
                this.setState({ // 상태 업데이트
                    notifications: notifications // 상태를 업데이트하여 랜더링을 트리거
                });
            } else {
                this.setState({ 
                    notifications: [], // 모든 알림이 추가되면 상태를 빈 배열로 설정 
                });
                clearInterval(timer); // 모든 알림 추가시 타이머 정리
            }
        }, 1000);
    }

    componentWillUnmount() { // 컴포넌트 언마운트시 호출
        if(timer) {
            clearInterval(timer); // 컴포넌트가 언마운트될 떄 타이머를 정리
        }
    }

    render() { // render 메서드로 JSX를 반환(클래스 컴포넌트)
        return ( 
            <div>
                {this.state.notifications.map((notification) => { // notifications 배열을 순회하며 Notification 컴포넌트를 랜더링
                    return <Notification key={notification.id} id={notification.id} message={notification.message} />; // 각 Notification 컴포넌트에 message prop을 전달
                })}
            </div>
        );
    }
}

export default NotificationList;