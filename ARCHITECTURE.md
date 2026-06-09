# Architecture Document

## Design Goal

The goal of this project is to build a modular website automation agent capable of interacting with webpages autonomously.

The architecture separates browser actions, workflow orchestration, and state management into independent components.

---

## High-Level Architecture

State

↓

LangGraph

↓

Nodes

↓

Tools

↓

Playwright

↓

Browser

---

## Components

### 1. State Layer

The state acts as the shared memory of the agent.

It stores:

* Browser instance
* Page instance
* URL
* Field detection status
* Form completion status
* Verification results
* Execution status

Example:

```js
{
  browser,
  page,
  usernameFound,
  descriptionFound,
  status
}
```

### 2. Tool Layer

Tools perform individual browser operations.

Examples:

* openBrowser()
* navigateToUrl()
* sendKeys()
* takeScreenshot()
* scroll()
* clickOnScreen()
* doubleClick()

Tools are reusable and independent of workflow logic.

---

### 3. Node Layer

Nodes represent workflow steps.

Implemented nodes:

* OpenBrowserNode
* NavigateNode
* ObserveNode
* FillFormNode
* VerificationNode
* ScreenshotNode
* CloseBrowserNode

Each node:

1. Reads state
2. Performs an action
3. Updates state
4. Returns state

---

### 4. LangGraph Layer

LangGraph orchestrates node execution.

Workflow:

START

↓

OpenBrowserNode

↓

NavigateNode

↓

ObserveNode

↓

Conditional Edge

├── FillFormNode

└── CloseBrowserNode

↓

VerificationNode

↓

ScreenshotNode

↓

CloseBrowserNode

↓

END

---

## Conditional Routing

The ObserveNode detects whether required form fields exist.

Decision Logic:

If Username and Description are found:

FillFormNode executes.

Otherwise:

CloseBrowserNode executes.

This allows dynamic workflow execution based on webpage state.

---

## Verification Strategy

After filling the form:

1. Read Username value
2. Read Description value
3. Compare with expected values
4. Report detailed errors if mismatch occurs

This prevents silent failures and improves debugging.

---

## Benefits of the Architecture

* Modular design
* Easy maintenance
* Reusable tools
* Clear separation of concerns
* Agent-oriented workflow
* Easy extensibility for future automation tasks

---

## Conclusion

The project successfully combines Playwright for browser automation and LangGraph for workflow orchestration to create a robust website automation agent capable of autonomous webpage interaction.
