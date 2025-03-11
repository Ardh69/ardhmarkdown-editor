# Markdown Editor

A modern React application that allows users to write Markdown text and see a live preview of the formatted output.

## Features

- **Live Preview**: See your formatted text as you type
- **Dark Mode**: Toggle between light and dark themes
- **Local Storage**: Your notes are saved automatically
- **Export to PDF**: Download your notes as PDF files
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- React with TypeScript
- TailwindCSS for styling
- Marked.js for Markdown parsing
- HTML2Canvas and jsPDF for PDF export
- Local Storage for data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/markdown-editor.git
   cd markdown-editor
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```
npm run build
```

The build files will be in the `build` directory.

## Deployment

This project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel, and it will automatically deploy your application.

## License

MIT
