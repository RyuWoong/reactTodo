/** @jsx jsx */
import { jsx } from "@emotion/core";
import { recoveryButton, TrashCan } from "../Emotions/Style";
import { MdReplay } from "react-icons/md";

const HistoryList = ({ todo, onRecovery }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <div css={recoveryButton} onClick={onRecovery}>
        <MdReplay />
      </div>
    </li>
  );
};

const HistoryBox = ({ delTodos, onRecovery }) => {
  return (
    <ul>
      {delTodos.map((todo) => (
        <HistoryList
          key={todo.id}
          todo={todo}
          onRecovery={() => onRecovery(todo.id)}
        />
      ))}
    </ul>
  );
};

function Trash({ Todos, onRecovery }) {
  const delTodos = Todos.filter((todo) => todo.del === true);
  console.log(delTodos);
  return (
    <div css={TrashCan}>
      {delTodos.length > 0 ? (
        <HistoryBox delTodos={delTodos} onRecovery={onRecovery} />
      ) : (
        "삭제된 할 일이 없습니다."
      )}
    </div>
  );
}

export default Trash;
