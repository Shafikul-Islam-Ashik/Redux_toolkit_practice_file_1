import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../features/todoSlice";
import { useState } from "react";

const Todo = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // state for input
  const [input, setInput] = useState("");

  const [oldData, setOldData] = useState(null);

  // state for edit mode
  const [editMode, setEditMode] = useState(false);

  // handleEdit
  const handleEdit = (data) => {
    setEditMode(true);
    setOldData(data);
    setInput(data);
  };

  // handle update
  const handleUpdate = () => {
    dispatch(updateTodo({ old: oldData, new: input }));
    setInput("");
    setEditMode(false);
  };

  return (
    <div className="container">
      <h2>Todo</h2>
      <hr />
      <input
        type="text"
        placeholder="Todo text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {editMode ? (
        <button onClick={() => handleUpdate()}>Update</button>
      ) : (
        <button onClick={() => dispatch(addTodo(input))}>Add</button>
      )}

      <hr />
      <ul>
        {todos.length > 0 ? (
          todos.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => dispatch(deleteTodo(item))}>
                  &times;
                </button>
                <button onClick={() => handleEdit(item)}> edit </button>
              </li>
            );
          })
        ) : (
          <li>No todos found</li>
        )}
      </ul>
    </div>
  );
};

export default Todo;
