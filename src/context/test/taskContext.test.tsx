import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DarkModeContext, DarkModeProvider } from '../darkMode';

// ✅ Mock `localStorage`
beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
});

describe('DarkModeProvider Context', () => {
  it('should initialize with dark mode from localStorage', () => {
    localStorage.setItem('color-theme', 'dark');

    render(
      <DarkModeProvider>
        <DarkModeContext.Consumer>
          {({ isDarkMode }) => <span>{isDarkMode ? 'Dark' : 'Light'}</span>}
        </DarkModeContext.Consumer>
      </DarkModeProvider>
    );

    expect(screen.getByText('Dark')).toBeInTheDocument();
  });
});
