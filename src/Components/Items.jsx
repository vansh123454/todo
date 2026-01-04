import TodoItem from "./TodoItem";
const Items = ({ todoItems, onDelete }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDelete}
        ></TodoItem>
      ))}
    </div>
  );
};

export default Items;
