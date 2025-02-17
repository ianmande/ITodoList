import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox Component', () => {
  it('should render correctly', () => {
    render(<Checkbox checked={false} onToggle={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('should call onToggle when clicked', () => {
    const onToggleMock = vi.fn();
    render(<Checkbox checked={false} onToggle={onToggleMock} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it('should be checked when the checked prop is true', () => {
    render(<Checkbox checked={true} onToggle={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('should have the correct class names', () => {
    render(<Checkbox checked={false} onToggle={() => {}} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveClass(
      'w-6 h-6 text-purple-500 border-dark-grayish-blue-dark rounded-2xl overflow-hidden focus:ring-purple-400 cursor-pointer dark:bg-very-dark-desaturated-blue'
    );
  });
});
