import React from 'react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">Markdown</h2>
      </div>
      <textarea
        className="flex-1 w-full p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none focus:outline-none font-mono text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="# Hello World\n\nStart typing your markdown here..."
      />
    </div>
  );
};

export default MarkdownEditor; 