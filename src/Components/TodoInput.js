/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const styleInput = css`
  width: 100%;
  height: 20px;
  font-size: 1rem;
  border-radius: 10px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #0066ff;
  }
`;

function TodoInput({ onCreate, Todos }) {
  const onSubmit = (e) => {
    const text = e.target.value;
    if (e.keyCode === 13 && text !== "") {
      e.target.value = "";
      const id = Todos.length + 1;
      onCreate(text, id);
    }
  };
  return (
    <div>
      <input
        css={styleInput}
        placeholder='할 일을 입력하세요.'
        onKeyDown={onSubmit}
      />
    </div>
  );
}

export default TodoInput;
