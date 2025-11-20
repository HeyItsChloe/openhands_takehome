/**
 * render player scores
 * notify activePlayer "your turn"
 */

import type { Score } from "./MainContainer"

interface ScoreContainerProps {
    scores: Score
    activePlayer: 'x' | 'o' | 'tie'
}

const ScoreContainer = ( {scores, activePlayer}: ScoreContainerProps ) => {
    console.log(scores)

    return (
<div className="flex flex-col items-center text-white border border-white rounded p-4 w-max">
  {/* Scoreboard row */}
  <div className="flex mt-2">
    {/* Player 1 */}
    <div
      className={`flex flex-col items-center px-4 py-2 rounded transition ${
        activePlayer === "x" ? "bg-pink-500/30" : ""
      }`}
    >
      <div className="font-bold">Player 1</div>
      <div>{scores.player1}</div>
    </div>

    {/* Divider */}
    <div className="border-l border-white mx-2"></div>

    {/* Player 2 */}
    <div
      className={`flex flex-col items-center px-4 py-2 rounded transition ${
        activePlayer === "o" ? "bg-pink-500/30" : ""
      }`}
    >
      <div className="font-bold">Player 2</div>
      <div>{scores.player2}</div>
    </div>

    {/* Divider */}
    <div className="border-l border-white mx-2"></div>

    {/* Tie */}
    <div
      className={`flex flex-col items-center px-4 py-2 rounded transition ${
        activePlayer === "tie" ? "bg-pink-500/30" : ""
      }`}
    >
      <div className="font-bold">Tie</div>
      <div>{scores.tie}</div>
    </div>
  </div>
</div>


    )
}

export default ScoreContainer