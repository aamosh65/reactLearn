import React, { useState } from "react";

const FormPractice = () => {
  //Interfaces
  interface playerData {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  //variables
  const [players, setPlayers] = useState<playerData[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ageNumber, setAgeNumber] = useState(0);
  const [errorSnap, setErrorSnap] = useState();

  //Objects

  //functions and side effects
  const addPlayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {
      name: "",
      email: "",
      age: "",
    };

    let errorHas = false;

    if (!name.trim()) {
      errors.name = "Name is required";
      errorHas = true;
    }

    if (!email.includes("@")) {
      errors.email = "Invalid Email";
      errorHas = true;
    }

    if (ageNumber <= 18) {
      errors.age = "Age must be above 18";
      errorHas = true;
    }

    if (errorHas) {
      console.log(errors);
      setErrorSnap([errors])
    }
    const newPlayer = {
      id: Number(crypto.randomUUID()),
      name: name,
      email: email,
      age: ageNumber,
    };

    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  //main component
  return (
    <div>
      <h1>Form Practice</h1>
      <form onSubmit={addPlayer}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="number"
          value={ageNumber}
          onChange={(e) => setAgeNumber(e.target.valueAsNumber)}
        />{" "}
        <br />
        <button type="submit">Submit Form</button>
      </form>

      <h2>Players List</h2>

      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>
              Name: {player.name}
              Email: {player.email}
              Age: {player.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FormPractice;
