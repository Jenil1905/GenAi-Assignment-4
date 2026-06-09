# Website Automation Agent

## Overview

This project is an intelligent website automation agent built using Playwright and LangGraph.

The agent autonomously navigates to a target website, identifies form elements, fills the form, verifies the entered values, captures screenshots, and closes the browser.

The project demonstrates browser automation, agent workflows, state management, conditional decision-making, and modular tool-based architecture.

---

## Target Website

https://ui.shadcn.com/docs/forms/react-hook-form

---

## Features

* Open browser automatically
* Navigate to target URL
* Detect Username field
* Detect Description field
* Fill form fields automatically
* Verify entered values
* Capture screenshots
* Close browser safely
* State-based workflow management
* Conditional routing using LangGraph

---

## Tech Stack

* Node.js
* Playwright
* LangGraph
* JavaScript

---

## Project Structure

src/

├── graph/

│   └── agentGraph.js

├── nodes/

│   ├── openBrowserNode.js

│   ├── navigationNode.js

│   ├── observeNode.js

│   ├── fillFormNode.js

│   ├── verificationNode.js

│   ├── screenshotNode.js

│   └── closeBrowserNode.js

├── state/

│   └── agentState.js

├── tools/

│   ├── browser.js

│   ├── navigation.js

│   ├── actions.js

│   └── screenshots.js

└── index.js

---

## Installation

Install dependencies:

npm install

Install Playwright:

npx playwright install

---

## Run Project

node src/index.js

---

## Workflow

START

↓

Open Browser

↓

Navigate to Website

↓

Observe Form Elements

↓

Conditional Decision

├── Fields Found → Fill Form

└── Fields Missing → Close Browser

↓

Verify Form Data

↓

Capture Screenshot

↓

Close Browser

↓

END

---

## Sample Output

[NODE] opening the browser

[NODE] Navigating to the URL

[NODE] Observing page elements

[NODE] Filling form

[NODE] Starting verification

[NODE] Taking screenshot

[NODE] Closing browser

Final Status: BROWSER_CLOSED

---

## Future Improvements

* Dynamic URL support
* Retry mechanism
* Scroll and re-observe loop
* LLM-powered webpage understanding
* Multi-page workflow automation
