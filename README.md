# CoolPockett Account Opening Wizard

A mobile-first, responsive 4-step account opening wizard built with React. This project demonstrates core frontend fundamentals, including component architecture, form validation, conditional rendering, state persistence, and reusable UI components without relying on heavy UI libraries.

---

## Live Demo

- **Deployed Link:** [CoolPockett Live Demo](https://coolpockett.vercel.app/)
- **GitHub Repo:** [CoolPockett GitHub](https://github.com/KeshavAgrawal18/CoolPockett)

---

## Overview

CoolPockett is a fictional fintech onboarding flow. This wizard guides users through a 4-step account creation process with validation, conditional logic, and a final review step.

The primary goal of this project is to demonstrate strong frontend fundamentals by implementing custom UI widgets and clean component structure instead of relying on prebuilt UI frameworks.

---

## Features

### Core Features

#### 4-Step Wizard Flow

1. **Account Basics**
2. **Account Setup**
3. **Details (Conditional)**
4. **Review & Submit**

Each step includes proper validation and navigation.

---

#### Step-Level Validation

Users cannot proceed to the next step until the current step is valid.  
Examples:

- Invalid email format blocks progress.
- Required fields must be filled.
- Conditional fields must be completed when shown.

Validation is implemented using custom logic to maintain full control and avoid unnecessary dependencies.

---

#### Conditional Rendering

Step 3 dynamically changes based on user selections.

**Account Type Condition:**

- **Individual:** Date of birth, Address, ID upload.
- **Business:** Legal business name, Registration country, Role.

**Country Condition:**

- **US:** State, SSN last 4 digits.
- **India:** PAN.
- **Other countries:** National ID.

---

#### Resume After Refresh (Partially Implemented)

The state structure supports persistence using `localStorage`.

Planned Implementation:

- **Save:**
  ```javascript
  localStorage.setItem("wizardData", JSON.stringify(formData));
  localStorage.setItem("wizardStep", step);
  ```

## Restore

```javascript
const savedData = localStorage.getItem("wizardData");
const savedStep = localStorage.getItem("wizardStep");
```

---

## Mobile-First Responsive Design

Designed mobile-first and scales cleanly to desktop.

### Features

- Flexible layouts
- Touch-friendly UI
- Responsive spacing
- Works across screen sizes

---

## Custom Reusable Components

All UI components built from scratch:

- `Input`
- `Select`
- `PasswordInput`
- `SelectCard`
- `FileUpload`
- `Button`
- `ProgressIndicator`

---

## Review Step

Displays summary of:

- Account basics
- Account setup
- Details

Includes **Account Preview** widget based on selected product goal.

---

## Tech Stack

**Frontend:**

- React
- JavaScript
- CSS

> No UI frameworks were used intentionally.

---

## Project Structure

```
src/
 ├── components/
 ├── steps/
 ├── utils/
 ├── App.js
 └── index.js
```

---

## State Management

Centralized state in the `App` component.

### Benefits

- Single source of truth
- Easy validation
- Easy persistence
- Predictable updates

---

## Known Limitations

Due to time constraints:

- Full resume-after-refresh persistence pending
- Final submit confirmation polish pending
- Animations and transitions pending
- Web Vitals optimization pending

Core functionality is complete.

---

## Future Improvements

- Complete persistence
- Add animations
- Accessibility improvements
- Performance optimization
- Testing

---

## Run Locally

```bash
git clone https://github.com/KeshavAgrawal18/CoolPockett
cd CoolPockett
npm install
npm start
```

---

## Author

**Keshav Agrawal**  
Full Stack Developer
