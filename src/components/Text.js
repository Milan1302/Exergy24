import React from "react";
function Text(props) {
  var text = props.text.split("");
  return (
    <div className={`text ${props.iden}`}>
      {text.map((e) => {
        return (
          <span style={{ fontSize: props.size }} className="font-effect-fire">
            {e}
          </span>
        );
      })}
    </div>
  );
}
export default Text;