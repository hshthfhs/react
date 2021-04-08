/**
 * コンポーネント化
 */

import React, { useState } from "react";
import ColorfulMessage from "./compornens/ColorfulMessage";

// 関数名は大文字から　AppBank
const App = () => {
  // [変数名, 関数名]
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // on/off　関数
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1>こんにちは</h1>
      {/* // ColorfulMessageに送る（props） */}
      <ColorfulMessage color="blue">元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>

      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

// 他のファイルで使用する
export default App;
