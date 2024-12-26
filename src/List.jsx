import React, { useState } from "react";


const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  const addTask = () => {
    if (!inputValue.trim()) return;
    if (isEditing !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === isEditing ? inputValue : task
      );
      setTasks(updatedTasks);
      setIsEditing(null);
    } else {
      setTasks([...tasks, inputValue]);
    }
    setInputValue("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setInputValue(tasks[index]);
    setIsEditing(index);
  };

  const clearList = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <h1 className="header">Grocery Shopping</h1>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span className="task-text">{task}</span>
            <button className="edit-button" onClick={() => editTask(index)}>
              ✏️
            </button>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              🗑️
            </button>
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add something to your list"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
        />
        <button className="add-button" onClick={addTask}>
          {isEditing !== null ? "Update" : "Add"}
        </button>
      </div>
      <button className="clear-button" onClick={clearList}>
        Delete List
      </button>
    </div>
  );
};

export default TodoApp;
