# Project Name
Assignment

## Description
Assignment for a YC startup.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version 18.0.0 or higher)
- npm

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd [project-name]
```

3. Install dependencies:
```bash
npm install
```

## Development

To run the project in development mode:
```bash
npm run dev
```
This will start the development server at `http://localhost:5173` (default Vite port).

## Build

To build the project for production:
```bash
npm run build
```
This will generate a `dist` folder with production-ready files.

## Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory and add your environment variables:
```
VITE_API_URL=your_api_url
```

## Project Structure
```
project-root/
├── public/          # Static assets
├── src/             # Source files
│   ├── assets/      # Project assets
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── .env             # Environment variables
├── index.html       # HTML entry point
├── package.json     # Project dependencies
└── vite.config.js   # Vite configuration
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests (if configured)

## License
MIT License
