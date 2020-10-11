import { useSelector, useDispatch } from "react-redux";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Main } from "../Emotions/Style";
import { deleteTodo } from "../Modules/TodoModule";

import Trash from "../Components/Trash";

function HistoryScreen() {
  const todos = useSelector((state) => state.TodoModule);
  const dispatch = useDispatch();
  const onRecovery = (id) => {
    console.log("복원");
    dispatch(deleteTodo(id));
  };
  return (
    <div css={Main}>
      <Trash Todos={todos} onRecovery={onRecovery} />
    </div>
  );
}

export default HistoryScreen;
