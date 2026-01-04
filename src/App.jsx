import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import WelcomeMassage from "./Components/WelcomeMassage";

import Items from "./Components/Items";

import "./App.css";

import { useState } from "react";

function App() {
  // let initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "21/09/2024",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "24/09/2024",
  //   },
  //   {
  //     name: "Vansh",
  //     dueDate: "28/092024",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added : ${itemName} Date : ${itemDueDate}`);

    const newTodoItem = [
      ...todoItems, //this 3 dot means spread operator aur hum isse pehle wale array me new array item add krte hai
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];

    setTodoItems(newTodoItem);
  };

  const handleDeleteButtonClicked = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName); //filter method se ek ek item todoItems se item me jaayege aur check karenge ki item.name todoItemName ke barabr na ho to wo usko waisa hi rakhege aur agar wo equal hote hai wo uss item ko delete kr denge.
    setTodoItems(newTodoItem);

    console.log(`Delete item is : ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMassage></WelcomeMassage>}
      <Items todoItems={todoItems} onDelete={handleDeleteButtonClicked}></Items>
    </center>
  );
}

export default App;
