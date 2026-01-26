import {useState, useEffect} from 'react';
function useFetchPost(){

    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
    
    const [posts, setPosts] = useState([]);
    const [postLoading, setPostLoading] = useState(false);
    const [postError, setPostError] = useState(false);
    
    useEffect(() => {
        async function fetchPost() {
          try{
            setPostLoading(true);
            const response = await fetch(POSTS_URL);
            const json = await response.json();
            setPosts(json);
            setPostLoading(false);
          } catch {
            setPostError(true);
            setPostLoading(false);
          }
        }
        fetchPost();
      }, [])
    return {
        posts,
        postLoading,
        postError,
    };
}
export default useFetchPost;