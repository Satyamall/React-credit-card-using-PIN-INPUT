import React from "react";

const defaultStyle = {
  width: "5rem",
  height: "1rem",
  borderRadius: "0.25rem",
  padding: "0.5rem 0.25rem",
  margin: "5px",
  fontWeight: "600",
  fontSize: "18px"
};

const successDefaultStyle = {
  width: "5rem",
  height: "1rem",
  borderRadius: "0.25rem",
  padding: "0.5rem 0.25rem",
  border: "1px solid green",
  margin: "5px",
  background: "yellow",
  color: "black",
  fontWeight: "600",
  fontSize: "18px"
};

const PinItem = React.forwardRef(
  ({ length, handleChange, handleBackSpace, values }, ref) => {
    const handleKeyUp = (e) => {
      console.log(e.code);
      switch (e.code) {
        case "Backspace": {
          handleBackSpace && handleBackSpace(e.target.value);
          break;
        }
        default: {
          handleChange(e.target.value);
        }
      }
    };
    return (
      <div>
        {values[values.length - 1].length === length ? (
          <input
            ref={ref}
            maxLength={length}
            style={successDefaultStyle}
            onKeyUp={handleKeyUp}
            placeholder="0000"
          />
        ) : (
          <input
            ref={ref}
            maxLength={length}
            style={defaultStyle}
            onKeyUp={handleKeyUp}
            placeholder="0000"
          />
        )}
      </div>
    );
  }
);

export default PinItem;
