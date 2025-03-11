import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { MarkdownNote } from './types';

const DEFAULT_MARKDOWN = `# Welcome to Markdown Editor

## Features

- **Live Preview**: See your formatted text as you type
- **Dark Mode**: Toggle between light and dark themes
- **Local Storage**: Your notes are saved automatically
- **Export to PDF**: Download your notes as PDF files

## Markdown Guide

### Headers

# H1
## H2
### H3

### Emphasis

*italic* or _italic_
**bold** or __bold__
**_bold and italic_**

### Lists

1. Ordered list item 1
2. Ordered list item 2

- Unordered list item
- Another item

### Links and Images

[Link text](https://example.com)
![Alt text](https://via.placeholder.com/150)

### Code

Inline \`code\`

\`\`\`javascript
// Code block
function hello() {
  console.log('Hello, world!');
}
\`\`\`

### Blockquotes

> This is a blockquote
> It can span multiple lines

### Tables

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
`;

function App() {
  const [markdown, setMarkdown] = useState<string>(() => {
    const savedNote = localStorage.getItem('markdownNote');
    if (savedNote) {
      const parsedNote: MarkdownNote = JSON.parse(savedNote);
      return parsedNote.content;
    }
    return DEFAULT_MARKDOWN;
  });

  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const note: MarkdownNote = {
      content: markdown,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem('markdownNote', JSON.stringify(note));
  }, [markdown]);

  const handleExportPDF = () => {
    if (previewRef.current) {
      html2canvas(previewRef.current).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });
        
        // Calculate the width and height of the PDF
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('markdown-note.pdf');
      });
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
        <Header onExportPDF={handleExportPDF} />
        <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 h-1/2 md:h-full border-r border-gray-200 dark:border-gray-700">
            <MarkdownEditor value={markdown} onChange={setMarkdown} />
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <MarkdownPreview markdown={markdown} previewRef={previewRef} />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
