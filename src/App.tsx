/**
 * render MainContainer
 *    - gameboard
 *    - scoreContainer
 *    - level options (dropdown)
 * Shared state
 *    - scores (board, scoreContainer)
 */

import MainContainer from "./components/MainContainer"

function App() {

  return (
    <div className="w-[500px] h-[500px] bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center" >
        <MainContainer />
    </div>
  )
}

export default App
