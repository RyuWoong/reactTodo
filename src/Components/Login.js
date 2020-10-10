import { useState } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LoginDialog from "./LoginDialog";

import { ButtonStyle } from "../Emotions/Style";
import { Link } from "react-router-dom";

const box = css`
  padding-left: 1rem;
  padding-right: 1rem;
`;

function Login({ history }) {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  const onConfirm = () => {
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <div css={box}>
      <button css={ButtonStyle("#0ca678", "full")} onClick={onClick}>
        로그인
      </button>
      <LoginDialog
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={visible}
      />
    </div>
  );
}

export default Login;
