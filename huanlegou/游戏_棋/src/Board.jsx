import Square from "./Square";
import {useState} from "react";

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const clickHandler = (index) => {
        if (squares[index]) {
            return
        }
        const filledCount = squares.filter(item => item !== null).length // 返回squares中已经填充的总数量。squares.filter返回的是一个数组
        const nextLetter = filledCount % 2 === 0 ? "X" : "O";
        const newSquares = squares.slice() // 生成一个新的数组切片，相当于clone，可选参数可以指定起始索引
        newSquares[index] = nextLetter
        console.log(index)
        setSquares(newSquares)
        // 下面这种方式不会改变页面值，是因为react需要检测到squares发生变化（这里的变化可能是内存中该变量重新分配了内存地址）才会重新渲染页面
        // squares[index]="X"
        // setSquares(squares)
    }
    return (
        <>
            <div className="board-row">
                {/*属性里面传递onclick可以理解为表达式的传递*/}
                <Square value={squares[0]} onClick={clickHandler} index={0}/>
                <Square value={squares[1]} onClick={clickHandler} index={1}/>
                <Square value={squares[2]} onClick={clickHandler} index={2}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={clickHandler} index={3}/>
                <Square value={squares[4]} onClick={clickHandler} index={4}/>
                <Square value={squares[5]} onClick={clickHandler} index={5}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={clickHandler} index={6}/>
                <Square value={squares[7]} onClick={clickHandler} index={7}/>
                <Square value={squares[8]} onClick={clickHandler} index={8}/>
            </div>
        </>
    )
}


export default Board