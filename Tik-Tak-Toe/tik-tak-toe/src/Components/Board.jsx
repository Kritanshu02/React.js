import Square from "./Square"
function Board({xIsNext, squares, onPlay}) {
   

    
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = "X"
        } else {
            nextSquares[i] = "O"
        }
        onPlay(nextSquares)
    }
    const winner = calculateWinner(squares)
    const draw= !winner && squares.filter(square=>square===null).length===0
    let status;
    if (winner) {
        status = "Winner: " + winner
    } else if(draw) {
        status="Its A Draw"
            }else {
        status = "Next Player: " + (xIsNext ? 'X' : 'O')
    }
    function resetGame(){
        setSquares(Array(9).fill(null))
        setXIsNext(true)
    }
    return (
        <div className="all min-h-screen flex items-center justify-center bg-red-100">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl text-shadow-md font-extrabold text-blue-600 mb-6 drop-shadow">
                    Game - Tic-Tac-Toe
                </h1>
                <div className=" status text-2xl font-semibold text-gray-700 mb-6">{status}</div>

                <div className="space-y-1">
                    <div className="board square space-x-1">
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    </div>
                    <div className="board square space-x-1">
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    </div>
                    <div className="board square space-x-1">
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                    </div>
                </div>
                <button onClick={resetGame }>Reset Button</button>
            </div>
        </div>
    )
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null;
}
export default Board;









