/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const styleBox = css`
  padding-left: 40px;
  padding-right: 40px;
  &::focus {
    border-radius: 10px;
  }
`;

const styleInput = css`
  width: 100%;
  height: 30px;
  font-size: 1.5rem;
  border-radius: 10px;
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
    <div css={styleBox}>
      <input
        css={styleInput}
        placeholder='할 일을 입력하세요.'
        onKeyDown={onSubmit}
      />
    </div>
  );
}

export default TodoInput;
