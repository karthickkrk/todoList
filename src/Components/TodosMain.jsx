import React from "react";
import TodosAdd from "./TodosAdd";
import TodosList from "./TodosList";
import TodoTask from "./TodoTask";

const TodosMain = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-200 py-4 w-11/12 sm:w-3/4  lg:w-2/4 h-100 px-4">
        <h2 className="font-semibold text-3xl text-center pb-2">TodoList</h2>
        <TodosAdd />
        <TodosList />
        <TodoTask />
      </div>
    </div>
  );
};

export default TodosMain;
