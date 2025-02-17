import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

import { useDarkMode } from '../../../hooks/useDarkMode';

vi.mock('../../../hooks/useDarkMode', () => ({
  useDarkMode: vi.fn(() => ({
    isDarkMode: false,
    toggleDarkMode: vi.fn(),
  })),
}));

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the correct background image for desktop light mode', () => {
    vi.mocked(useDarkMode).mockReturnValue({
      isDarkMode: false,
      toggleDarkMode: vi.fn(),
    });

    render(<Header />);

    // Verificamos con `toHaveProperty`
    const img = screen.getByAltText('Background');
    expect(img).toHaveProperty(
      'src',
      expect.stringContaining('bg-desktop-light.jpg')
    );
  });

  it('should render the correct background image for desktop dark mode', () => {
    vi.mocked(useDarkMode).mockReturnValue({
      isDarkMode: true,
      toggleDarkMode: vi.fn(),
    });

    render(<Header />);

    const img = screen.getByAltText('Background');
    expect(img).toHaveProperty(
      'src',
      expect.stringContaining('bg-desktop-dark.jpg')
    );
  });

  it('should render the mobile background image when screen width is 375px', () => {
    vi.mocked(useDarkMode).mockReturnValue({
      isDarkMode: true,
      toggleDarkMode: vi.fn(),
    });

    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(max-width: 375px)',
      media: query,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));

    render(<Header />);

    const source = screen
      .getByRole('img')
      ?.parentElement?.querySelector('source');
    expect(source).toHaveProperty(
      'srcset',
      expect.stringContaining('bg-mobile-dark.jpg')
    );
  });
});
