import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeProvider';
import { SessionProvider } from "next-auth/react"; // Thêm thư viện quản lý phiên đăng nhập

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* Bao bọc toàn bộ App bằng SessionProvider để quản lý đăng nhập Google */}
    <SessionProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </SessionProvider>
  </React.StrictMode>
);
