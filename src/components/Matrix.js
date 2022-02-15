import React, { useState } from "react";
import "./Matrix.css";
import "./FindWord.css";
import Logic from "./Logic";

function Matrix() {
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [text, setText] = useState("");
  const [showtext, setShowtext] = useState([]);
  const [clr, setClr] = useState([])

  const color = (a) => {
    setClr(a);
  }

  // let arrLen = arr.length
  const handleOnchangerow = (event) => {
    setRow(event.target.value);
  };

  const handleOnchangecol = (event) => {
    setCol(event.target.value);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const setcolor = (x,y) => {
    if (clr.length){
      if (clr.findIndex((v)=>v[0] === x && v[1] === y) !== -1){
        return true
      }
    return false
    }
    return false
  }
  const handleOnclick = () => {
    if (text.length < row*col){
      alert(`Please enter ${row*col-text.length} more alphabets`)
      return
    }
    let rows = parseInt(row);
    let cols = parseInt(col);
    let arr = new Array(rows);

    for (let i = 0; i < rows; i++) {
      arr[i] = new Array(cols);
    }
    // Input for Array
    // const text1 = text.length ? text : "qwertyuioplkjhgfdsazxcvbnm";
    let h = 0
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // arr[i][j] = text1[Math.floor(Math.random() * text1.length)];
        arr[i][j] = text[h++];
      }
      setShowtext(arr);
      setClr([])
    }
  };

  return (
    <>
      <div className="containerma">
        <div className="shadows">
          <span>L</span>
          <span>E</span>
          <span>T</span>
          <span>S</span>
          <span>-</span>
          <span>P</span>
          <span>L</span>
          <span>A</span>
          <span>Y</span>
        </div>
      </div>
      <div className="container my-3 ">
        <input
          type="number"
          onChange={handleOnchangerow}
          placeholder="Rows"
        ></input>
        <span className="mx-3">
          <input
            type="number"
            onChange={handleOnchangecol}
            placeholder="Col"
          ></input>
        </span>
        <span className="mx-3">
          <input type="text" onChange={handleText} placeholder="Alphabets" />
        </span>
        <div className="container my-3">
          <button type="button" className="button-33" onClick={handleOnclick}>
            Click to Show Matrix
          </button>
        </div>
        <div>
          <Logic row={row} col={col}  array={showtext} clr={color}/>
        </div>
        {showtext.length?<div className="container my-3" id="grid">
        {showtext.map((alphabet,i) => {
            return alphabet.map((val, j) => {
              return (
                <>
              
                  <span className="box" style={{color: setcolor(i,j)?"black":"white"}}>
                    {val.toUpperCase()}
                  </span>
                  {alphabet.length - 1 === j ? <br></br> : <></>}
                </>
              );
            });
          })}
        </div>:""}
      </div>
    </>
  );
}

export default Matrix;
