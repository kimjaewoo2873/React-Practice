import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// root DOM node에 렌더링
import Library from './chapter_03/Library'; // Library 컴포넌트를 import
import Clock from './chapter_04/Clock'; // Clock 컴포넌트를 import
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root')); // root DOM 노드를 가져와서 ReactDOM의 createRoot 메서드로 초기화
// root.render , 화면에 보여줄 컴포넌트를 실제로 렌더링 
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>
// )

// root.render( 
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// )

// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   )
// }, 1000); // 1초마다 Clock 컴포넌트를 렌더링

// root.render(
//   <React.StrictMode>
//     <Library /> {/* Library 컴포넌트를 렌더링 */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
