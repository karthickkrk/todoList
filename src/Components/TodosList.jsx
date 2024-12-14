import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos, checkBoxSelected } from "../Features/todoSlice";
import { FiX } from "react-icons/fi";

const TodosList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.todos);
  const selectedCheckBox = useSelector((state) => state.todoList.selectedBox);
  const checkedCount = selectedCheckBox.filter((value) => value === true);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    dispatch(checkBoxSelected(event.target.checked));
    console.log("checkdata--", event.target.checked);
  };
  const handleDelete = (id) => {
    dispatch(deleteTodos(id));
    console.log("it true", checkedCount);

    if (selectedCheckBox === checkedCount) {
      alert(313);

      dispatch(checkBoxSelected(id));
    }
  };
  return (
    <ul className="mt-2 h-72 overflow-auto pr-2">
      {todoList.map((item, id) => {
        console.log(todoList.length);

        return (
          <li
            key={id}
            className="odd:bg-blue-50 even:bg-blue-100 flex justify-between items-center px-4 py-2 mb-2"
          >
            <div className="">
              <label
                className="custom-checkbox pr-2 mb-0 flex items-center"
                key={id}
              >
                <span>{isChecked ? <del>{item}</del> : item}</span>
                <input type="checkbox" onChange={handleChange} />
                <span className="checkmark"></span>
              </label>
            </div>
            <button className="text-blue-800" onClick={() => handleDelete(id)}>
              <FiX />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodosList;
