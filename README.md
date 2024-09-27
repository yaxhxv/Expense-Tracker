# Expense Tracker - Peppermint

This is a simple and intuitive **Expense Tracker** application built using modern web technologies like React, Vite, Tailwind CSS, and Recharts. The app helps you track your expenses, visualize them in charts, and manage your budget effectively.

## Features

- Add, edit, and delete expenses
- Categorize expenses (e.g., food, transportation, etc.)
- Visualize expense breakdown using a pie chart
- Responsive design with Tailwind CSS
- Unique ID generation for each expense using `uuid`
- Modal for adding/editing expenses using `react-modal`
- Charts for expense visualization using `recharts`

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **Vite**: Next-generation front-end tool for fast development and build
- **Tailwind CSS**: Utility-first CSS framework for fast UI development
- **Recharts**: A composable charting library for React
- **UUID**: Library for generating unique IDs
- **ESLint**: JavaScript linter for maintaining code quality
- **React Icons**: Icons for React

## Project Structure

```bash
.
├── public/                 # Public assets
├── src/
│   ├── components/         # React components
│   ├── styles/             # Tailwind and custom styles
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── .eslintrc.js            # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation


```

Installation - 
Prerequisites
Node.js (v14 or higher)
npm or yarn package manager
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yaxhxv/Expense-Tracker.git
cd expensetracker
Install dependencies:

b

npm install
Run the development server:


Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

Build
To create a production build, run:


npm run build
This will generate the build files in the dist folder.

Linting
To check your code for any linting issues, run:


npm run lint
Testing
This project uses @testing-library/react for testing. You can run tests with:


npm test
Deployment
You can deploy this app to any static hosting service like Netlify or Vercel.

Build the project using:


npm run build
Deploy the generated dist folder.



License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Vite
React
Recharts
Tailwind CSS



### Key Sections:
- **Project Overview**: Describes the features and tech stack.
- **Installation and Setup**: Provides instructions for getting the project running locally.
- **Build and Linting**: Includes steps to build and lint the project.
- **Deployment**: Outlines how to deploy the app to a platform like Netlify or Vercel.
- **License and Acknowledgments**: Covers licensing and resources used.

