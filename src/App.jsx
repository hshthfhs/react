/**
 * コンポーネント化
 */
// reactは再レンダリングしている

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./componens/ColorfulMessage";

// 関数名は大文字から　AppBank
const App = () => {
  // stateの[変数名, 関数名]
  //　動的に変わるものはuseStateで設定する
  const [num, setNum] = useState(0);

  // trueのとき表示
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // カウントアップ関数
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // on/off　関数
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectは変数[num]が変化したときだけ処理を実行する
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1>こんにちは</h1>
      {/* // ColorfulMessageに送る（props）propsとして渡したい名称="値" */}
      <ColorfulMessage color="blue">元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>

      {/* trueの場合右側を返す */}
      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

// 他のファイルで使用する
export default App;
