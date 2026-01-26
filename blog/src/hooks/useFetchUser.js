import {useState, useEffect} from 'react';

function useFetchUser() {
    const USERS_URL = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(false);
    const [userError, setUserError] = useState(false);

    useEffect(() => {
    async function fetchUser() {
      try{
        setUserLoading(true);
        const response = await fetch(USERS_URL);
        const json = await response.json();
        setUsers(json);
        setUserLoading(false);
      } catch {
        setUserError(true);
        setUserLoading(false);
      }
    }
    fetchUser();
    }, [])

    return{
        users,
        userLoading,
        userError,
    };
}
export default useFetchUser;