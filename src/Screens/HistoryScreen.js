/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Main, TrashCan } from "../Emotions/Style";

function HistoryScreen() {
  return (
    <div css={Main}>
      <div css={TrashCan}>휴지통</div>
    </div>
  );
}

export default HistoryScreen;
