/** @jsx jsx */
import { css } from "@emotion/core";
import { lighten, darken } from "polished";

/* 재활용 스타일 */
const sizing = {
  large: css`
    height: 3rem;
    font-size: 1.25rem;
  `,
  medium: css`
    height: 2.25rem;
    font-size: 1rem;
  `,
  small: css`
    height: 1.75rem;
    font-size: 0.875rem;
  `,
  full: css`
    height: 2.25rem;
    font-size: 1rem;
    width: 100%;
  `,
};

export const ButtonStyle = (color, size) => {
  return css`
    /* 공통스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
    align-items: center;

    /* 크기 */
    ${sizing[size]}

    /* 색상  */
      background: ${color};
    &:hover {
      background: ${lighten(0.1, color)};
    }
    &:active {
      background: ${darken(0.1, color)};
    }
  `;
};

export const CardStyle = css`
  border: 1px solid #e9ecef;
  border-radius: 4px;
  box-shadow: 3px 0px 10px #868e96;
  box-sizing: border-box;
  padding: 3px 10px;
  background: #ffffff;
`;

/* Header */
export const menuBox = css`
  background: #e9ecef;
  height: 100%;
  width: 300px;
  border-right: 1px solid #f8f9fa;
  box-sizing: border-box;
  position: fixed;
  text-align: center;
  ul {
    text-decoration: none;
  }
  ul li {
    margin-bottom: 5px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li:hover {
    background: ${lighten(0.1, "#FFF")};
  }
  li:active {
    background: ${darken(0.1, "#FFF")};
  }
`;

export const banner = css`
  color: #0ca678;
`;

export const DarkBackground = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const DialogBox = css`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  position: relative;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
  a {
    position: absolute;
    top: 5%;
    left: 95%;
    cursor: pointer;
  }
  a:visited {
    color: black;
  }
  a:active {
    color: black;
  }
  input {
    width: 100%;
    height: 2.25rem;
    box-sizing: border-box;
    margin: 10px 0;
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }
  input:focus {
    outline: none;
    border: 2px solid #8ce99a;
    border-radius: 4px;
  }
`;

export const Main = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 320px;
  background: #e9ecef;
`;

export const TrashCan = css`
  font-size: 2rem;
  background: white;
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  ul li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  ul li span {
    width: 100%;
  }
`;

export const recoveryButton = css`
  color: #dee2e6;
  transition: all ease 0.7s;
  cursor: pointer;
  &:hover {
    color: #0ca678;
    transform: rotate(-360deg);
  }
`;
