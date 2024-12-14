import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Features/todoSlice";
import { FiPlus } from "react-icons/fi";

const TodosAdd = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const [addButtonDisable, setAddButtonDisable] = useState(true);
  const fieldFocus = useRef(null);
  const buttonFocus = useRef(null);

  useEffect(() => {
    fieldFocus.current?.focus();
  }, []);

  const handleChange = (e) => {
    setVal(e.target.value);
    setAddButtonDisable(e.target.value === "");
    //buttonFocus.current?.focus();
  };

  const handleClick = () => {
    dispatch(addTodos(val));
    setVal("");
    setAddButtonDisable(true);
    fieldFocus.current?.focus();
  };
  return (
    <div className="flex justify-center ">
      <input
        ref={fieldFocus}
        className="border border-blue-500 py-1 px-2 w-full"
        type="text"
        onChange={handleChange}
        value={val}
      />
      <button
        ref={buttonFocus}
        className="ml-2 bg-blue-500 text-white py-2 px-4 border border-blue-500 disabled:opacity-75 enabled:hover:bg-lime-600 enabled:hover:border-lime-600"
        onClick={handleClick}
        disabled={addButtonDisable}
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default TodosAdd;
