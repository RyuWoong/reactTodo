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
      <Link to='/history'>
        <h3>휴지통</h3>
      </Link>
    </div>
  );
}

export default Header;
