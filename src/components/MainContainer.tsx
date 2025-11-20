/**
 * render board, level dropdown, then scores
 * maintain shared state (scores, level)
 */

import { useEffect, useState } from "react"
import ScoreContainer from "./ScoreContainer"
import TicTacToeBoard from "./TicTacToeBoard"

export type Score = {
    player1: number,
    player2: number,
    tie: number
}

const MainContainer = () => {
    const [scores, setScores] = useState<Score>({
        player1: 0,
        player2: 0,
        tie: 0
    })
    const [level, setLevel] = useState<"easy" | "medium" | "hard">('easy')
    const [activePlayer, setActivePlayer] = useState<'x' | 'o' | 'tie'>('x')

    useEffect(() => {
        //TODO update state on mount
        setActivePlayer('x')
    }, [scores])

    return (
        <div className="space-y-4">
                  <h1 className="text-3xl font-extrabold text-white text-center mb-4 drop-shadow-lg"> 🤲Tic-Tac-Toe! </h1>

            <TicTacToeBoard setActivePlayer={setActivePlayer} activePlayer={activePlayer} level={level} scores={scores} setScores={setScores} setLevel={setLevel} />
            <div>
                <label className="text-white mr-2">Select Your Game Level:</label>
                <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value as "easy" | "medium" | "hard")}
                    className="text-white bg-transparent border border-white rounded px-2 py-1 focus:outline-none"
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <ScoreContainer activePlayer={activePlayer} scores={scores} />
        </div>
    )
}

export default MainContainer