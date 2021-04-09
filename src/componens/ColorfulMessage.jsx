import React from "react";

// Appから引数（props）受け取り color
export const ColorfulMessage = (props) => {
  // 分割代入　colorとテキスト
  const { color, children } = props;
  // css設定
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  //　ColorfulMessageタグのテキスト(children)を取得
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
