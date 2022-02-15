import React from "react";

function GameInfo() {
  return (
    <>
      <div className="container1">
        <div className="shadows">
          <span>G</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
          <span>I</span>
          <span>N</span>
          <span>F</span>
          <span>O</span>
        </div>
      </div>
      <div className="info container">
      <ul><br/>
        <li>
          Enter numbers m & n which indirectly indicates m rows and n column of
          a 2D grid.
        </li><br/>
        <li>
          The user should enter alphabets such that one alphabet occupies one
          position in the grid. Here we will need m*n number of alphabets.
        </li><br/>
        <li> Grid creation done</li><br/>
        <li>
          Display the grid. Now The user can provide a text which needs to be
          searched in the grid.
        </li><br/>
        <li>
          If the text is available in the grid, then those alphabets should be
          shown if the text in the grid is readable in left to right direction
          (east), or top to bottom direction (south) or diagonal (south-east).
        </li><br/>
      </ul>
      </div>
    </>
  );
}

export default GameInfo;
