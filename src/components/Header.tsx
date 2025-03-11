import React, { useContext } from 'react';
import { FiMoon, FiSun, FiDownload } from 'react-icons/fi';
import { ThemeContext } from '../contexts/ThemeContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface HeaderProps {
  onExportPDF: () => void;
}

const Header: React.FC<HeaderProps> = ({ onExportPDF }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Markdown Editor</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onExportPDF}
          className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FiDownload className="mr-2" />
          Export PDF
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header; 