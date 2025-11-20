/**
 * render board
 * handle logic for clicking a square, saving state, ai moves based on level
 */

import { useEffect, useState } from "react"
import type { Score } from "./MainContainer"
import { DEFAULT_GAME_STATE, getGameState, updateGameState, type GameState } from "../chomeUtil"
import { checkForAWin, easyMove, hardMove, mediumMove, simulateMove } from "../gameUtil"


interface TicTacToeBoardProps {
    setScores: React.Dispatch<React.SetStateAction<Score>>
    scores: Score
    level: 'easy' | 'medium' | 'hard'
    activePlayer: 'x' | 'o' | 'tie'
    setActivePlayer: React.Dispatch<React.SetStateAction<"x" | "o" | "tie">>
    setLevel: React.Dispatch<React.SetStateAction<"easy" | "medium" | "hard">>
}

const TicTacToeBoard = ({ scores, setScores, setActivePlayer, level, setLevel }: TicTacToeBoardProps) => {
    const [isGameOver, setGameOver] = useState(false)
    const [board, setBoard] = useState<GameState["board"]>(DEFAULT_GAME_STATE.board);
    const [startingPlayer, setStartingPlayer] = useState<GameState["startingPlayer"]>(
        DEFAULT_GAME_STATE.startingPlayer
    );

    useEffect(() => {
        let mounted = true;

        const loadGame = async () => {
            const gs = await getGameState(DEFAULT_GAME_STATE);
            if (!mounted) return;

            setBoard(gs.board);
            setActivePlayer(gs.activePlayer as "x" | "o" | "tie");
            setStartingPlayer(gs.startingPlayer);
            setLevel(gs.level as "easy" | "medium" | "hard");
            setScores(gs.scores);
            setGameOver(false);
        };

        loadGame();

        return () => { mounted = false };
    }, []);

    const handleMoveMade = async (row: number, col: number) => {
        if (isGameOver || board[row][col] !== null) return;

        // --- Player X move ---
        let newBoard = simulateMove(board, row * 3 + col, "X");

        // Check win after player move
        let winner = checkForAWin(newBoard);
        if (winner) {
            await handleWin(winner, newBoard);
            return;
        }

        setBoard(newBoard);
        setActivePlayer("o");
        await updateGameState({ board: newBoard, activePlayer: "O" });
        setTimeout(async () => {
            let aiIndex: number;
            if (level === "easy") aiIndex = easyMove(newBoard);
            else if (level === "medium") aiIndex = mediumMove(newBoard, "O");
            else aiIndex = hardMove(newBoard, "O", "X");
          
            newBoard = simulateMove(newBoard, aiIndex, "O");
          
            // Check win after AI move
            const winner = checkForAWin(newBoard);
            if (winner) {
              await handleWin(winner, newBoard);
              return;
            }
          
            // Back to player X turn
            setBoard(newBoard);
            setActivePlayer("x");
            await updateGameState({ board: newBoard, activePlayer: "X" });
          }, 350);
    };


    const handleWin = async (winner: string, finalBoard: any) => {
        const newScores = { ...scores };
        if (winner === "X") newScores.player1++;
        else if (winner === "O") newScores.player2++;
        else newScores.tie++;

        setBoard(finalBoard);
        setScores(newScores);
        setGameOver(true);

        await updateGameState({
            board: finalBoard,
            scores: newScores,
        });
    };

    const handleResetGame = async () => {
        const newStarting = startingPlayer === "x" ? "o" : "x";
        const emptyBoard = DEFAULT_GAME_STATE.board.map(row => row.map(() => null));

        setBoard(emptyBoard);
        setActivePlayer(newStarting);
        setStartingPlayer(newStarting);
        setGameOver(false);

        await updateGameState({
            board: emptyBoard,
            activePlayer: newStarting,
            startingPlayer: newStarting
        });
    };

    return (
<div>
  {isGameOver && (
    <div onClick={handleResetGame}>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Play Again?
      </button>
    </div>
  )}
  <div className="grid grid-cols-3">
    {board.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className="flex items-center justify-center w-25 h-20 border border-white text-white text-4xl font-bold cursor-pointer hover:bg-white/10 transition"
          onClick={() => handleMoveMade(rowIndex, colIndex)}
        >
          {cell}
        </div>
      ))
    )}
  </div>
</div>

    )
}

export default TicTacToeBoard