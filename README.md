

Approach
1. My initial focus was the best platform to play a game like tic tac toe
    - I chose a chrome ext because I beleove the best UX for this type of a game is a small lightwieght, easily acessbile app. I wouldnt normally navigate to a webapp for a small "brain teaser" / "time waster" app. I would want it easil y accesible from an app (ios or chrome ext)
    - I also wanted to easily persist state.I imagined playing the game between tasks, as a brain teaser, so I wanted the state (board, amd scores) nto persist afer the extension was closed and reopened 
2. My dev focus was to build the needed component architecture, maintain state nicely, and let GPT drive devlopment of function defintions for speed.
    - I relied on  pseudo coding each function and letting AI complete the function definitions accoriding to my pseudo
    - I relied on AI for styling component using tailwind for speed as well. Because, for me, styling and design can be the most time consuming are of dev

3. Tools
    - I relied on GPT becuae I have used it before and for the sake of time, chose to use a familiar AI tool to help drive dev elopment

  4. How I'd improve
      - I'd use openhands AI as it is more suited for devopling code and assisting in function definitions
      - With more time I would
            - Add a sidepane to control the game level (easy medium hard)
            - Add tabs in the sidepane so the user can toggle the mainScreen between the gameboard and a leaderboard
            - Add a SQLlite backend so the user can store their username, and score on the leaderboard


5. Didnt Go as planned
    - Styling was more time consuming than expected and I couldve relied on better prompts for GPT





Tic Tac Toe – Chrome Extension

A lightweight, persistent, and easy-to-access Tic Tac Toe game built as a Chrome Extension. Designed for quick “brain-teaser” moments throughout the day.

🚀 Start the Game

Install dependencies

npm install


Build the project

npm run build


Run the dev server

npm run dev


Open Chrome Extensions

Navigate to: chrome://extensions

Enable Developer mode

Load the extension

Enable Developer Mode (top-right)

Click Load unpacked

Select the folder openhands_takehome

Play the game!

Launch the extension and start playing anytime.



🧠 Approach
1. Choosing the Platform

I selected a Chrome Extension for the following reasons:

A small game like Tic Tac Toe is best enjoyed when it’s instantly accessible, not buried inside a full webapp.

Chrome Extensions provide a UX similar to a mobile widget or quick-launch app—perfect for a “time-waster” or “mental break” game.

Extensions make it simple to persist state (board + scores) so the game stays intact even after closing/reopening the popup.

2. Development Strategy

My focus was building a clean component architecture, smooth state management, and fast iteration.

I wrote pseudo-code and outlined each function and component and let GPT generate full, styled implementations to save time.

I relied on AI for Tailwind styling to accelerate UI work (since design is typically my most time-consuming area).

The goal was to deliver a clean MVP quickly with solid structure for future enhancements.

3. Tools Used

GPT-based assistance for:

Function generation from pseudo-code and outlines

UI and Tailwind styling

Rapid iteration and refining architectural decisions

I chose GPT due to familiarity and efficiency under time constraints.



🚧 What I Would Improve (Given More Time)

Use OpenHands AI, which is better optimized for coding workflows and function completion.

Add a side panel to control game difficulty (Easy / Medium / Hard).

Add tabs in the side panel to switch between:

    - Game Board

    - Leaderboard

Implement a SQLite backend  to store:

  -  Username

  -   Persistent leaderboard scores



😬 What Didn’t Go as Planned

Styling took more time than expected.

I could have crafted more effective prompts for GPT to streamline UI development.

Some iterations required manual adjustments that slowed the process.