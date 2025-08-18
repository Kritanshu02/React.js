import Board from "./board";
import { useState } from "react";


function Game(){
     const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const[currentMove, setCurrentMove]=useState(0)
    const currentSquares=history[currentMove]

    function handlePlay(nextSquares){
        const nextHistory=[...history.slice(0, currentMove+1), nextSquares]
        console.log(nextSquares)
        console.log(nextHistory)
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
        setXIsNext(!xIsNext)

    }
            console.log([...history.slice(0, currentMove+1)])


    function jumpTo(nextMove){
        setCurrentMove(nextMove)


    }
    const moves=history.map((squares, move)=>{
        let description;
        if(move>0){
            description="go to move :"+move;
        }else{
            description="go to game start"
        }
        return(
            <li key={move}>
                <button onClick={()=>jumpTo(move)}>{description}</button>
            </li>

        );
        
    });
    
    return(
        <>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        <ol>
            {moves}
        </ol>
        </>
    )
}
export default Game;


