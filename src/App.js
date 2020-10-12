/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Routes from "./Components/Routes";

const meta = () => css`
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  } ;
`;

function App() {
  return (
    <div className='App' css={meta}>
      <Routes />
    </div>
  );
}

export default App;
