
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary.tsx';

// Create a function to mount the app
const mountApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Failed to find the root element");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>
    );
  } catch (error) {
    console.error("Failed to render the app:", error);
    // Fallback rendering in case of error
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;padding:2rem;">
          <h2 style="color:#d32f2f;font-size:1.5rem;margin-bottom:1rem;">Something went wrong</h2>
          <p style="margin-bottom:1rem;">Please try reloading the page</p>
          <button onclick="window.location.reload()" style="background:#3f51b5;color:white;padding:0.5rem 1rem;border:none;border-radius:4px;cursor:pointer;">
            Reload Page
          </button>
        </div>
      `;
    }
  }
};

// Execute the mount function
mountApp();
