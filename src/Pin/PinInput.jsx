import { useRef, useState } from "react";
import PinItem from "./PinItem";

function PinInput({ noOfBoxes = 4, length = 4, onChange }) {
  const [values, setValues] = useState(() => new Array(noOfBoxes).fill(""));
  const arr = new Array(noOfBoxes).fill(0);
  const ref = useRef([]);

  const handleChange = (val, index) => {
    // set the value[i] to new value
    values[index] = val;
    setValues([...values]);
    // move to next input box
    if (val.length === length && index < noOfBoxes - 1) {
      ref.current[index + 1].focus();
    }
    // if onchagne exists invoke onChange and pass the joined value
    onChange && onChange(values.join(""));
  };

  const handleBackSpace = (val, index) => {
    let temp = values[index];
    values[index] = val;
    if (index > 0 && temp.length === 0) {
      ref.current[index - 1].focus();
    }
    setValues([...values]);
    onChange(values.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteValue = e.clipboardData
      .getData("text")
      .split("")
      .filter((a, i) => i < length * noOfBoxes);
    // assumption: it will work only for length per box = 1;
    pasteValue.forEach((char, index) => {
      values[index] = char;
      ref.current[index].value = char;
      if (index < noOfBoxes - 1) {
        ref.current[index + 1].focus();
      }
      setValues([...values]);
      onChange && onChange(values.join(""));
    });
    // console.log(val);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        border: "1px solid gray",
        width: "450px",
        height: "270px",
        borderRadius: "20px",
        background: "gray",
        margin: "auto",
        marginBottom: "50px"
      }}
      onPaste={handlePaste}
    >
      <div>
        <h3>PNB CREDIT CARD</h3>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: "gold",
            border: "1px solid black",
            borderRadius: "10px",
            marginBottom: "10px"
          }}
        >
          <img
            width="50px"
            height="50px"
            src="https://previews.123rf.com/images/martialred/martialred1811/martialred181100026/113393157-gold-credit-or-debit-charge-card-emv-chip-flat-vector-icon-for-apps-and-websites.jpg"
            alt=""
          />
        </div>
        <div style={{ display: "flex" }}>
          {arr.map((_, i) => (
            // <input key={i} ref={(el) => (ref.current[i] = el)} />
            <PinItem
              key={i}
              ref={(el) => (ref.current[i] = el)}
              handleChange={(v) => handleChange(v, i)}
              handleBackSpace={(v) => handleBackSpace(v, i)}
              length={length}
              values={values}
            />
          ))}
        </div>
        <div style={{ lineHeight: "2px", textAlign: "left" }}>
          <h5 style={{ textAlign: "center", marginBottom: 20 }}>
            VALID UPTO 10/24
          </h5>
          <h5>SATYA PRAKASH MALL</h5>
          <h6>Punjab National Bank</h6>
        </div>
      </div>
    </div>
  );
}

export default PinInput;
