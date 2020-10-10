import { Link } from "react-router-dom";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { menuBox } from "../Emotions/Style";

const logo = css`
  width: 200px;
  height: 200px;
`;

function Header() {
  return (
    <div css={menuBox}>
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        css={logo}
        alt='Together Do!'
      />
      <ul>
        <Link to='/'>
          <li>홈</li>
        </Link>
        <Link to='/history'>
          <li>휴지통</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
