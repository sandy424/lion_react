import Header from "../src/components/Header";
import Post from "../src/components/Post";

import useFetchPost from "./hooks/userFetchPost";

import "./App.css";
import useFetchUser from "./hooks/useFetchUser";

function App() {
  const {posts, postError, postLoading} = useFetchPost();
  const {users, userLoading, userError} = useFetchUser();
  

  if(postLoading || userLoading) {
    return <div className="container">
      <Header/>
      <div>Loading ...</div>
      </div>
  }

  if(postError || userError) {
    return(
      <div className="container">
        <Header/>
        <div>에러가 발생했습니다.</div>
        <div>새로고침을 해주세요.</div>
      </div>
    )
  }

  return (
    <div className="container">
      <Header/>
      {posts.map(({id, title, body, userId}) => {
        const user = users.find((user) => user.id === userId);
        return(
          <Post 
          key={id} 
          title={title} 
          body={body}
          username={user.username}
          email={user.email}
          />
        )
      })}
    </div>
  )
}

export default App
