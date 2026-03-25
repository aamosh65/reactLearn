import React, { useState } from "react";
import { Oval } from "react-loader-spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(Boolean);
  const [error, setError] = useState([]);

  async function fetchData() {
    setError(null);
    setLoading(true);
    console.log("button was clicked");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Network respone was not ok");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data due to:" + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Fetching Data from Api</h1>
      <button onClick={fetchData}>Load users</button>
      {loading ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <span></span>
      )}
      {users.length > 0 ? (
        users.map((user) => (
          <ul key={user.id}>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        ))
      ) : (
        <span></span>
      )}

      {error != null ? <h1>{error}</h1> : <span></span>}
    </>
  );
};

export default Users;
