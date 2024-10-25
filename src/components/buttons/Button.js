import React from "react";
function Button(prop) {
  const { content, style, onClick } = prop;
  return (
    <div id="buttonComponent" style={style} onClick={onClick}>
      {content}
    </div>
  );
}

export default Button;
