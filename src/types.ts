export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface MarkdownNote {
  content: string;
  lastUpdated: string;
} 