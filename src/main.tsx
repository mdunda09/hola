import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { setupSectionObserver } from './utils/AnimationObserver.ts';

const AppWithAnimations = () => {
  useEffect(() => {
    // Set up the intersection observer for section animations
    const observer = setupSectionObserver();
    
    // Clean up the observer when the component unmounts
    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithAnimations />
  </StrictMode>
);