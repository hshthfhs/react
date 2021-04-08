/**
 * コンポーネント化
 */

import React from "react";
import ColorfulMessage from "./compornens/ColorfulMessage";

// 関数名は大文字から　AppBank
const App = () => {
  const onClickButton = () => alert();

  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage />
      <p style={contentLadyStyle}>元気です</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルで使用する
export default App;
