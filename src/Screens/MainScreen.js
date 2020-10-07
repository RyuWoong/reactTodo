import { useSelector, useDispatch } from "react-redux";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { addTodo, deleteTodo, toggleTodo } from "../Modules/TodoModule";
import { Main } from "../Emotions/Style";
import Todo from "../Components/Todo";

function MainScreen() {
  const todos = useSelector((state) => state.TodoModule);
  const dispatch = useDispatch();
  const onCreate = (text, id) => dispatch(addTodo(text, id));
  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div css={Main}>
      <Todo
        Todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

export default MainScreen;
