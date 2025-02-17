import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { useDarkMode } from '../../../hooks/useDarkMode';

vi.mock('../../../hooks/useDarkMode', () => ({
  useDarkMode: vi.fn(() => ({
    isDarkMode: false,
  })),
}));

describe('Header Component', () => {
  it('should render the correct background image for desktop light mode', () => {
    (useDarkMode as vi.Mock).mockReturnValue({ isDarkMode: false });

    render(<Header />);

    const img = screen.getByAltText('Background');
    expect(img).toHaveAttribute(
      'src',
      '/src/assets/images/bg-desktop-light.jpg'
    );
  });

  it('should render the correct background image for desktop dark mode', () => {
    (useDarkMode as vi.Mock).mockReturnValue({ isDarkMode: true });

    render(<Header />);

    const img = screen.getByAltText('Background');
    expect(img).toHaveAttribute(
      'src',
      '/src/assets/images/bg-desktop-dark.jpg'
    );
  });

  it('should use the correct mobile background image when screen width is 375px', () => {
    (useDarkMode as vi.Mock).mockReturnValue({ isDarkMode: true });

    // Simular media query manualmente
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(max-width: 375px)',
      media: query,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));

    render(<Header />);

    const source = screen
      .getByRole('img')
      .parentElement?.querySelector('source');
    expect(source).toHaveAttribute(
      'srcset',
      '/src/assets/images/bg-mobile-dark.jpg'
    );
  });
});
