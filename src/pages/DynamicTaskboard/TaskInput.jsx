import React, { useState } from "react";

const TaskInput = () => {
  const [currTask, setCurrTask] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  async function getData() {
    let newTask = {
      id: Date.now(),
      task: currentInput,
      completed: false,
    };
    setCurrTask([...currTask, newTask]);
    console.log(newTask);
  }

  return (
    <>
      <div>
        <h2>Enter the task.</h2>
        <label htmlFor="taskText">Task Name:</label>
        <br />
        <input
          type="text"
          id="taskText"
          value={currentInput}
          onChange={(e) => {
            setCurrentInput(e.target.value);
          }}
        />
        <br />
        <button onClick={getData}>Add</button>
      </div>
    </>
  );
};

export default TaskInput;
