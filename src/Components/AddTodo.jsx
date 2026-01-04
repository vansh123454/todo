import { useState } from "react";
import { VscAdd } from "react-icons/vsc";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName(""); //add button clicked krne ke baad name wala input blank hoga
    setDueDate(""); //add button clicked krne ke baad date wala input blank hoga
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            id="add-btn"
            onClick={() => {
              // onNewItem("a", "b");
              handleAddButtonClicked();
            }}
          >
            <VscAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
