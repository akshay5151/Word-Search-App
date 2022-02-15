import React, { useState } from "react";

function Home() {
  const [text, setText] = useState([]);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleChangeRow = (event) => {
    setRow(event.target.value);
  };

  const handleChangeCol = (event) => {
    setCol(event.target.value);
  };

  const handleOnclick = () => {
    // setText("Bye")
    // console.log(typeof(parseInt(row)));
    // console.log(typeof(col));
    // let array = new Array(parseInt(row));
    // document.write("Creating 2D array <br>");
    // for (let i = 0; i < array.length; i++) {
    //   array[i] = [];
    // }
    let h = 0;
    let s = "123456789";

    // Loop to initialize 2D array elements.
    // for (let i = 0; i < parseInt(row); i++) {
    //   for (let j = 0; j < parseInt(col); j++) {
    //     array[i][j] = s[h++];
    //   }
    // }

    const string1 = Array(parseInt(row)).fill(s[h++]).map(()=>Array(parseInt(col)).fill(s[h++]));
    // Loop to display the elements of 2D array.
    // for (let i = 0; i < parseInt(row); i++) {
    //   for (let j = 0; j < parseInt(col); j++) {
    //     string.push(array[i][j] + " ");
    //   }
    //   // string.split("\n")
    // }
    console.log(string1);
    setText(string1);
  };
  return (
    <>
      <div className="container my-3">
        <h2>Home</h2>
        <input type="text" onChange={handleOnchange}></input>
        <input type="number" onChange={handleChangeRow}></input>
        <input type="number" onChange={handleChangeCol}></input>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary my-3"
            onClick={handleOnclick}
          >
            Primary
          </button>
          {/* reptiles.map((reptile) => <li>{reptile}</li> */}
          <p id="show">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Home;


