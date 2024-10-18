# Game Maniac

Game Maniac is a topup application built using React and Zustand for state management. The application handles payment processes, including displaying payment details and payment success.

## Implementation Choices

1. **State Management**: Zustand is used for managing the application's state due to its simplicity and performance. It allows for easy sharing of state across components without prop drilling.

2. **Local Storage**: The application uses `localStorage` to persist payment data and manage the payment state. This allows the application to retain user data even after refreshing the page.

3. **Responsive Design**: The application is built to be responsive using utility classes, ensuring it works well on both mobile and desktop devices.

4. **Component Structure**: The project follows a modular component structure, separating UI components like `DetailPayment`, `DetailPaymentSuccess`, and others for clarity and reusability.

## Getting Started

To get a copy of this project up and running on your local machine, follow these instructions:

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MicRoCats7/game-maniac.git
cd payment-application

2. Install the dependencies:
```bash
npm install
```

or if you prefer Yarn:
```bash
yarn install
```

### Running the Project
To start the development server, run:
```bash
npm run dev
```
or

```bash
yarn dev
```
Open your browser and navigate to http://localhost:3000 to view the application.

Features
Display payment details and payment success
Validates user input and displays error messages if necessary
Responsive design for better user experience on different devices

THANK YOU
