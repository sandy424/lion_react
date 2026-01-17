import { useState } from 'react';

function App() {
  const [like, setLike] = useState(0);
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <p>환영합니다. 이 곳은 Todo-Blog입니다.
        {hidden ? (<button onClick={() => {
          setHidden(hidden ? true : false)}}>{hidden ? "더보기" : "숨기기"}</button>) : 
        (
          <>
            <br/>
            할 일 관리와 블로그 기능을 함께 제공합니다.
            <br/>
            효율적으로 일정을 관리하고, 생각을 기록해보세요!
            <br/>
            시작하려면 사이드바에서 원하는 기능을 선택하세요.
          </>
        )}
      </p>
      <div>좋아요 : {like}</div>
      <button onClick={() => {
        setLike(like+1);
      }}>Good !</button>
    </div>
  )
}

export default App
