import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

const ProfileHome = () => {
  const [users, setUsers] = useState([]);

  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [hobbyValue, setHobbyValue] = useState("");

  const hiFunction = (nameOfUser) => {
    return alert("Hello " + nameOfUser);
  };

  const deleteMe = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const addUser = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: crypto.randomUUID(),
        name: nameValue,
        age: ageValue,
        hobby: hobbyValue,
      },
    ]);

    setNameValue("");
    setAgeValue("");
    setHobbyValue("");
  };
  return (
    <div>
      <h1>Profile Showcase</h1>
      <section>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={ageValue}
          onChange={(e) => {
            setAgeValue(e.target.value);
          }}
        />
        <br />
        <label htmlFor="hobby">Hobby</label>
        <input
          type="text"
          id="hobbt"
          value={hobbyValue}
          onChange={(e) => {
            setHobbyValue(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={addUser}>Add User</button>
      </section>

      <h2>Profile List</h2>
      {users.map(({ id, name, age, hobby }) => {
        return (
          <ProfileCard
            key={id}
            name={name}
            age={age}
            hobby={hobby}
            hiFunction={() => hiFunction(name)}
            deleteMe={() => deleteMe(id)}
          />
        );
      })}

      <Link to={"/"}>
        <button>Go back Home</button>
      </Link>
    </div>
  );
};

export default ProfileHome;
