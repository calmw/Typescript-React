import Square from "./Square";
import {useState} from "react";

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const clickHandler = () => {
        console.log(1)
    }
    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onClick={clickHandler}/>
                <Square value={squares[1]} onClick={clickHandler}/>
                <Square value={squares[2]} onClick={clickHandler}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={clickHandler}/>
                <Square value={squares[4]} onClick={clickHandler}/>
                <Square value={squares[5]} onClick={clickHandler}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={clickHandler}/>
                <Square value={squares[7]} onClick={clickHandler}/>
                <Square value={squares[8]} onClick={clickHandler}/>
            </div>
        </>
    )
}


export default Board