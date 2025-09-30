import React from "react";

function Header() {
  // console.log("Header 컴포넌트 업데이트");
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

export default React.memo(Header); //헤더 컴포넌트에 메모이제이션 적용후 내보내기
