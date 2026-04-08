Prerequisites

Make sure you have Node.js installed on your computer. You can check if it's installed by opening your terminal/command prompt and typing node -v.
Step-by-Step Guide
1. Download the Project
In the Google AI Studio interface, look for the Export or Download button (usually located in the top right menu or settings). Download the project as a ZIP file and extract it to a folder on your computer.
2. Open in VS Code
Open Visual Studio Code.
Go to File > Open Folder... (or Open on Mac) and select the extracted folder.
3. Open the VS Code Terminal
In VS Code, go to the top menu and click Terminal > New Terminal (or press Ctrl + `).
4. Install Dependencies
In the terminal, run the following command to download all the required packages (like React, Tailwind, and Framer Motion):
code
Bash
npm install
5. Start the Development Server
Once the installation is complete, start the local server by running:
code
Bash
npm run dev
6. View the App
The terminal will output a local URL (usually http://localhost:5173).
Hold Ctrl (or Cmd on Mac) and click the link in the terminal, or copy and paste it into your web browser.
That's it! The app will now be running locally. Since Vite is used, any changes you make to the code in VS Code will instantly update in your browser. And because the app uses localStorage for data persistence, your logged meals and goals will be saved right in your local browser.
