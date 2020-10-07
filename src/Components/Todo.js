import { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdDone,
  MdRadioButtonUnchecked,
  MdDelete,
} from "react-icons/md";
import TodoInput from "./TodoInput";
import { CardStyle } from "../Emotions/Style";

const arrayDay = ["일", "월", "화", "수", "목", "금", "토"];
const nowDate = new Date();
const titleDate = `${nowDate.getFullYear()}년 ${nowDate.getMonth() + 1}월 
${nowDate.getDate()}일 
${arrayDay[nowDate.getDay()]}요일`;

const margin_zero = css`
  margin: 0;
`;

const Remove = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
    opacity: 1;
  }
`;

const TodoItemBox = css`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const TodoCheckBox = css`
  display: flex;
  align-items: center;
  padding-right: 10px;
  &:hover {
    color: #0ca678;
  }
`;

const TodoTextBox = css`
  display: flex;
  align-items: center;
  box-sizing: content-box;
`;

const toggleIcon = css`
  font-size: 1rem;
  text-align: center;
`;

const color = (value) => css`
  color: ${value};
`;
const TodoHead = ({ count }) => {
  return (
    <div>
      <h1 css={margin_zero}>{titleDate}</h1>
      <h2>
        남은 할일&nbsp;
        <span
          css={css`
            color: #0ca678;
          `}
        >
          {count}
        </span>
        개
      </h2>
    </div>
  );
};

const TodoItem = ({ Todo, onToggle, onDelete }) => {
  return (
    <li css={TodoItemBox} key={Todo.id}>
      <div css={TodoCheckBox} onClick={() => onToggle(Todo.id)}>
        {Todo.done ? (
          <span css={color("#0ca678")}>
            <MdDone />
          </span>
        ) : (
          <MdRadioButtonUnchecked />
        )}
      </div>
      <div css={TodoTextBox}>{Todo.text}</div>
      <div css={Remove} onClick={() => onDelete(Todo.id)}>
        <MdDelete />
      </div>
    </li>
  );
};

const TodoList = ({ Todos, onToggle, onDelete }) => {
  return (
    <ul
      css={css`
        list-style: none;
      `}
    >
      {Todos.map((Todo) => {
        if (Todo.del) {
          return null;
        } else {
          return (
            <TodoItem
              key={Todo.id}
              Todo={Todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          );
        }
      })}
    </ul>
  );
};

function Todo({ Todos, onCreate, onToggle, onDelete }) {
  const [showList, setShowList] = useState(false);

  const countTodo = Todos.filter(
    (Todo) => Todo.done === false && Todo.del === false
  ).length;

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  });

  const onShow = () => {
    setShowList(!showList);
  };

  const hide = css`
    display: ${showList ? "block" : "none"};
  `;

  return (
    <div css={CardStyle}>
      <TodoHead count={countTodo} />
      <div css={hide}>
        <TodoList Todos={Todos} onToggle={onToggle} onDelete={onDelete} />
        <TodoInput Todos={Todos} onCreate={onCreate} />
      </div>
      <p onClick={onShow} css={toggleIcon}>
        {showList ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </p>
    </div>
  );
}

export default Todo;
