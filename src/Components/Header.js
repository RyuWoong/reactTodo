import { Link } from "react-router-dom";

import Login from "../Components/Login";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { menuBox } from "../Emotions/Style";

const diveStyle = css`
  border: 1px solid #f8f9fa;
`;

function Header() {
  return (
    <div css={menuBox}>
      <Link to='/'>
        <h1>Together Do!</h1>
      </Link>
      <Login />
      <hr css={diveStyle} />
      Router 페이지 이동
    </div>
  );
}

export default Header;
