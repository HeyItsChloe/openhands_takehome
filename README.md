# 🎮 Tic Tac Toe – Chrome Extension

A lightweight, persistent, and easy-to-access **Tic Tac Toe** game built as a Chrome Extension — for quick “brain-teaser” moments throughout the day.

---

## 🚀 Start the Game

### **1. Install Dependencies**

```bash
npm install
```

### **2. Build the Project**

```bash
npm run build
```

### **3. Run the Dev Server **

```bash
npm run dev
```

### **4. Load the Extension in Chrome**

* Open Chrome and go to: `chrome://extensions`
* Enable **Developer Mode** (top-right)
* Click **Load unpacked**
* Select the folder **`openhands_takehome`**

### **5. Play the Game**

* Launch the extension from your Chrome toolbar
* Start playing anytime!

---

## 🧠 Approach

### **1. Choosing the Platform**

I chose a Chrome Extension because:

* A small game like Tic Tac Toe is best enjoyed when it’s instantly accessible, not buried inside a full webapp.
* Chrome Extensions provide a UX similar to a mobile widget or quick-launch app—perfect for a “time-waster” or “mental break” game.
* It provides instant, lightweight access — ideal for a simple game.
* It mimics a mobile widget or quick-launch app.
* State persistence (board + scores) is simple and reliable.
* It fits the "quick break / mental reset" goal of the game.

---

### **2. Development Strategy**

My development priorities were clean architecture, smooth state handling, and rapid delivery.

I used:
* My focus was building a clean component architecture, smooth state management, and fast iteration.
* **Pseudo-coded and outlined functions and compoenents **, then used GPT to generate function definitions for speed.
* **Tailwind via GPT** to quickly styl components.
* I relied on AI for Tailwind styling to accelerate UI work (since design is typically my most time-consuming area).

The goal was to deliver a clean MVP quickly with solid architecture for future enhancements.

---

### **3. Tools Used**

I primarily relied on:

* 🤖 **GPT for coding assistance**

  * Function generation from pseudo-code and outlines
  * UI styling with Tailwind
  * Refactoring 
* I chose GPT due to familiarity under time constraints.

---

## 🚧 What I Would Improve (With More Time)

I would add:

*  **OpenHands AI** - I;d use this instead of GPT to boost code generation quality. It is more suited for devopling code and assisting in function definitions
*  **Sidepane** for level controls (Easy / Medium / Hard)
* **Sidepane tabs** to switch between:
  * Game Board
  * Leaderboard
* **BE SWerver with SQLite ** to store:
  * Username
  * Persistent leaderboard scores

---

## 😬 What Didn’t Go as Planned

* Styling took more time than expected
* I could have used more effective prompts for GPT for faster development.
* Some iterations required manual adjustments that slowed the process.

  
