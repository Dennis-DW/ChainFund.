
---

# ChainFund Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Key Components](#key-components)
7. [Navigation and Section Observers](#navigation-and-section-observers)
8. [Animations and Interactivity](#animations-and-interactivity)

---

## Project Overview

**ChainFund** is a crowdfunding web application designed to streamline project management and communication in the crowdfunding space. The app is built to help users efficiently manage workflows and improve productivity by optimizing interaction and engagement with various project stakeholders.

The project has a responsive navigation system, integrated animations, section-based scrolling, and utilizes smooth page transitions for an enhanced user experience.

## Project Structure

- **`/components`**: Contains reusable React components, including headers, navigation links, and progress indicators.
- **`/assets`**: Holds assets like icons, logos, and other media required for visual consistency.
- **`/pages`**: Defines the primary pages of the application, with sections for “About,” “Features,” “Testimonials,” and “Contact.”
- **`/styles`**: Holds global and component-level styles.
- **`/public`**: Contains static files such as images used across the project.

## Technology Stack

- **Frontend**: React with TypeScript and Next.js, enabling server-side rendering and optimized performance.
- **Styling**: Tailwind CSS for custom styling, responsiveness, and layout.
- **Animations**: Framer Motion for creating smooth and interactive animations.
- **Utilities**: Intersection Observer for dynamic scrolling and section-based navigation.
- **Other Dependencies**: Various npm packages for optimized state management and enhanced UX.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Dennis-DW/ChainFund..git
   cd ChainFund
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   - Visit `http://localhost:3000` to view the app in action.

## Usage

- **Navigation**: The `Header` component includes responsive navigation that links to the different sections of the app (About, Features, Testimonials, and Contact).
- **Dashboard Access**: A “Dashboard” button provides quick access, prominently positioned on both mobile and desktop views.

### Section Scrolling
Each section of the page is linked to a unique `id`, allowing smooth, section-based scrolling. Clicking a link scrolls the page to the corresponding section with a smooth transition.

## Key Components

1. **Header**:
   - Contains logo, navigation links, and dashboard button.
   - Includes mobile and desktop views, toggling between menu and close icons.
   - Dynamically highlights the active section as the user scrolls.

2. **ScrollProgressBar**:
   - Tracks the user’s progress along the page for visual feedback.

3. **Section Observers**:
   - Uses Intersection Observer API to monitor each section, setting the `active` state based on the section in view.

## Navigation and Section Observers

The `handleNavClick` function manages smooth scrolling and highlights the active navigation link based on the current viewport section. It uses Intersection Observer to track and automatically set the active state for each section based on visibility.

## Animations and Interactivity

### Arrow Animation
- `ArrowRight` animation in the header for visual indication of workflow optimization.
- Uses Framer Motion for smooth transitions and looping animation sequences.

### Section Transition
- Smooth scrolling transitions between sections enhance user experience.
- The active section is highlighted in the navigation bar based on the section in view.

---

