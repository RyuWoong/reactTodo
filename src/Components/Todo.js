import { useState, useEffect, useRef } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdDone,
  MdRadioButtonUnchecked,
  MdDelete,
} from 'react-icons/md';
import TodoInput from './TodoInput';
import { CardStyle } from '../Emotions/Style';

const arrayDay = ['일', '월', '화', '수', '목', '금', '토'];
const nowDate = new Date();
const titleDate = `${nowDate.getFullYear()}년 ${nowDate.getMonth() + 1}월 
${nowDate.getDate()}일 
${arrayDay[nowDate.getDay()]}요일`;

const HeadStyle = css`
  margin-bottom: 20px;
  h1 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const Remove = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
  }
  z-index: 0;
`;

const TodoItemBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:hover > span {
    opacity: 1;
  }
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
  width: 100%;
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
    <div css={HeadStyle}>
      <h1>{titleDate}</h1>
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
          <div css={color('#0ca678')}>
            <MdDone />
          </div>
        ) : (
          <MdRadioButtonUnchecked />
        )}
      </div>
      <div css={TodoTextBox}>{Todo.text}</div>
      <span css={Remove} onClick={() => onDelete(Todo.id)}>
        <MdDelete />
      </span>
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
          return <TodoItem key={Todo.id} Todo={Todo} onToggle={onToggle} onDelete={onDelete} />;
        }
      })}
    </ul>
  );
};

function Todo({ Todos, onCreate, onToggle, onDelete }) {
  const listRef = useRef();
  const listHeight = useRef();
  const [showList, setShowList] = useState(true);

  const countTodo = Todos.filter((Todo) => Todo.done === false && Todo.del === false).length;

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(Todos));
    if (listRef.current.clientHeight !== 0) {
      listHeight.current = listRef.current.clientHeight;
      console.log(listHeight.current);
    }
  });

  const onShow = () => {
    setShowList(!showList);
    if (showList === false) {
      listRef.current.style.height = `${listHeight.current}px`;
    } else {
      listRef.current.style.height = '0';
    }
  };

  const hide = css`
    overflow: hidden;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  `;

  return (
    <div css={CardStyle}>
      <TodoHead count={countTodo} />
      <div css={hide} ref={listRef}>
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
