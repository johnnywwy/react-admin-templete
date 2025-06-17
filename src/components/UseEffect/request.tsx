import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

const useEffectFetch = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("1");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => response.json())
      .then((date) => {
        setUser(date);
        setLoading(false);
      });
  }, [userId]);

  return (
    <>
      <div>
        <input value={userId} onChange={(e) => setUserId(e.target.value)} />
        <div>
          {loading || !user ? (
            <div>loading...</div>
          ) : (
            <div>
              <p>姓名: {user.name}</p>
              <p>邮箱: {user.email}</p>
              <p>用户名: {user.username}</p>
              <p>电话: {user.phone}</p>
              <p>网址: {user.website}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default useEffectFetch;
