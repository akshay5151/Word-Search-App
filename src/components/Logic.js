import React,{ useState } from "react";
import PropTypes from "prop-types";

function Logic(props) {
  const [word, setWord] = useState();
  const [showWord, setShowWord] = useState("")
  const changeWord = (event) => {
    setWord(event.target.value);
  };
  const handleFindWord = () => {
    setShowWord("")
    let R = props.row;
    let C = props.col;
    let grid = props.array
    let x = [-1, -1, -1, 0, 0, 1, 1, 1];
    let y = [-1, 0, 1, -1, 1, -1, 0, 1];

    function search2D(grid, row, col, word) {
      if (grid[row][col] !== word[0]) return false;

      let len = word.length;

      for (let dir = 0; dir < 8; dir++) {
        let k,
          rd = row + x[dir],
          cd = col + y[dir];
          let flag = []
        for (k = 1; k < len; k++) {
          if (rd >= R || rd < 0 || cd >= C || cd < 0) break;

          if (grid[rd][cd] !== word[k]) break;
          flag.push([rd,cd])
          rd += x[dir];
          cd += y[dir];
          // console.log(rd,cd);
        }
        if (k === len) return {a:true,b:dir,c:flag};
        flag = []
      }

      return false;
    }

    function patternSearch(grid, word) {
      for (let row = 0; row < R; row++) {
        for (let col = 0; col < C; col++) {
          const res=search2D(grid, row, col, word)
          if (res){
          setShowWord(word);
          props.clr([[row,col],...res.c])
          // console.log( row , col , res.b, [[row,col],...res.c])
        }
        }   
      }
    }
    patternSearch(grid, word);
  };

  return (
    <div>
      <div className="findWord container">
        <input type="text" onChange={changeWord} />
        <button
          type="button"
          className="button-33 mx-3 my-3 "
          onClick={handleFindWord}
        >
          Word Search
        </button>
      </div>
      <div className="container">
          <h3>{showWord === ""?"The Word is Not Found":"The Word is Found: "}{showWord.toUpperCase()}</h3>
      </div>
    </div>
  );
}

export default Logic;

Logic.propType = {
  row: PropTypes.number,
  col: PropTypes.number,
};

Logic.defultProps = {
  row: 0,
  col: 0,
};
