import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TitleAndSwitchMode from './TitleAndSwitchMode';
import { useDarkMode } from '../../hooks/useDarkMode';

vi.mock('../../hooks/useDarkMode', () => ({
  useDarkMode: vi.fn(),
}));

describe.only.only('TitleAndSwitchMode Component', () => {
  it('should render the title and theme switch icon', () => {
    (useDarkMode as vi.Mock).mockReturnValue({
      isDarkMode: false,
      toggleDarkMode: vi.fn(),
    });

    render(<TitleAndSwitchMode />);

    expect(screen.getByText('TODO')).toBeDefined();
    expect(screen.getByAltText('Background')).toBeDefined();
  });

  it('should switch theme when clicking the icon', () => {
    const toggleDarkModeMock = vi.fn();
    (useDarkMode as vi.Mock).mockReturnValue({
      isDarkMode: false,
      toggleDarkMode: toggleDarkModeMock,
    });

    render(<TitleAndSwitchMode />);

    const themeIcon = screen.getByAltText('Background');
    fireEvent.click(themeIcon);

    expect(toggleDarkModeMock).toHaveBeenCalledTimes(1);
  });
});
