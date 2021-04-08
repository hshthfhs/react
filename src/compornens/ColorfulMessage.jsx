import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  // css設定
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  //　ColorfulMessageタグのテキストを取得
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
