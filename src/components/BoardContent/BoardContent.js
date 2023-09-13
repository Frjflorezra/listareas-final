import React, { useEffect, useState } from "react";
import "./BoardContent.scss";
import Column from "../Column/Column";
import { initData } from "../../actions/initData";
import _, { isEmpty } from "lodash";
import { mapOrder } from "../../utilities/sorts";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardInitData = initData.boards.find((item) => item.id === "board-1");
    if (boardInitData) {
      setBoard(boardInitData);

      //sort columns
      setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id'));
    }
  }, []);

  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">Board is not found</div>
      </>
    );
  }

  return (
    <>
      <div className="board-columns">
        
        {columns &&
          columns.length > 0 &&
          columns.map((column, index) => {
            return <Column key={column.id} column={column} />;
          })}
      </div>
    </>
  );
};

export default BoardContent;
