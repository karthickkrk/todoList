import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos } from "../Features/todoSlice";

const TodoTask = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.todoList.todos);
  const selectedCheckBox = useSelector((state) => state.todoList.selectedBox);
  const checkedCount = selectedCheckBox.filter((value) => value === true);
  const hadleRemove = (id) => {
    if (checkedCount) {
      selectedCheckBox.length = 0;
      dispatch(deleteTodos(id));
    }
  };
  return (
    <div className="flex justify-between mt-3 pt-4  border-t  border-gray-500">
      <div className="border border-gray-400 w-56 flex justify-center items-center bg-lime-500">
        <span>
          <strong>{checkedCount.length}</strong> of{" "}
        </span>
        <span className="pl-1">
          <strong>{count.length}</strong> task done
        </span>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 border border-blue-500 flex items-center">
        <span className="pr-2" onClick={hadleRemove}>
          {" "}
          Removed checked
        </span>{" "}
        <FiX className="" />
      </button>
    </div>
  );
};

export default TodoTask;
