/**
 * funcs for:
 *      saving all game state to chrome
 *      fething all state 
 */

const EMPTY_BOARD: ('X' | 'O' | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

export const DEFAULT_GAME_STATE: GameState = {
    board: EMPTY_BOARD,
    scores: { player1: 0, player2: 0, tie: 0 },
    activePlayer: 'x',
    startingPlayer: 'x',
    level: 'easy'
  };

// ===============================
// GameState Interface
// ===============================
export interface GameState {
    board: ('X' | 'O' | null)[][];
    scores: {
      player1: number;
      player2: number;
      tie: number;
    };
    activePlayer: string;       // "x" | "o"
    startingPlayer: string;     // "x" | "o"
    level: string;              // "easy" | "medium" | "hard"
  }
  
  
  // ===============================
  // Save full game state
  // ===============================
  export const saveGameState = (state: GameState): Promise<void> => {
    return new Promise((resolve) => {
      chrome.storage.sync.set({ gameState: state }, () => resolve());
    });
  };
  
  
  // ===============================
  // Update partial game state (merge)
  // Ensures the merge is always into a valid GameState
  // ===============================
  export const updateGameState = (
    partial: Partial<GameState>
  ): Promise<void> => {
    return new Promise((resolve) => {
      chrome.storage.sync.get(["gameState"], (result) => {
        const current: GameState = result.gameState as GameState;
  
        const updated: GameState = {
          ...current,
          ...partial,
          scores: {
            ...current.scores,
            ...(partial.scores || {})
          }
        };
  
        chrome.storage.sync.set({ gameState: updated }, () => resolve());
      });
    });
  };
  
  
  // ===============================
  // Get full game state
  // Always returns a valid GameState
  // Fallback to DEFAULT_GAME_STATE automatically
  // ===============================
  export const getGameState = (
    DEFAULT_GAME_STATE: GameState
  ): Promise<GameState> => {
    return new Promise((resolve) => {
      chrome.storage.sync.get(["gameState"], (result) => {
        const gs = result.gameState as GameState | undefined;
  
        if (!gs) {
          // if nothing in storage, save + return default
          chrome.storage.sync.set({ gameState: DEFAULT_GAME_STATE }, () =>
            resolve(DEFAULT_GAME_STATE)
          );
        } else {
          resolve(gs);
        }
      });
    });
  };
  
  
  // ===============================
  // Reset to default state
  // ===============================
  export const resetGameState = (defaultState: GameState): Promise<void> => {
    return new Promise((resolve) => {
      chrome.storage.sync.set({ gameState: defaultState }, () => resolve());
    });
  };
  