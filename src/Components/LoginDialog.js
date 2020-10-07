/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { DarkBackground, DialogBox, ButtonStyle } from "../Emotions/Style";

function LoginDialog({ visible, onConfirm, onCancel }) {
  if (!visible) return null;
  return (
    <div css={DarkBackground}>
      <div css={DialogBox}>
        <Link to='/' onClick={onCancel}>
          X
        </Link>
        <h3>로그인</h3>
        <input placeholder='Insert Email' />
        <button css={ButtonStyle("#0ca678", "full")} onClick={onConfirm}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default LoginDialog;
