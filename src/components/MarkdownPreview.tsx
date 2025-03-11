import React, { RefObject } from 'react';
import { marked } from 'marked';

interface MarkdownPreviewProps {
  markdown: string;
  previewRef: RefObject<HTMLDivElement>;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown, previewRef }) => {
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // Convert markdown to HTML
  const getMarkdownHtml = () => {
    return { __html: marked.parse(markdown) as string };
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">Preview</h2>
      </div>
      <div 
        ref={previewRef}
        className="flex-1 p-4 overflow-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      >
        <div 
          className="markdown-preview"
          dangerouslySetInnerHTML={getMarkdownHtml()} 
        />
      </div>
    </div>
  );
};

export default MarkdownPreview; 