import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskFooter } from '../../task/TaskFooter';

describe('TaskFooter Component', () => {
  const mockSetFilter = vi.fn();
  const mockClearCompleted = vi.fn();

  const footerProps = {
    taskNumbers: 5,
    filter: 'all',
    setFilter: mockSetFilter,
    clearCompleted: mockClearCompleted,
  };

  it('should display the correct number of tasks left', () => {
    render(<TaskFooter {...footerProps} />);

    expect(screen.getByText('5 items left')).toBeInTheDocument();
  });

  it('should call setFilter when clicking on filter buttons', () => {
    render(<TaskFooter {...footerProps} />);

    fireEvent.click(screen.getByText('Active'));
    expect(mockSetFilter).toHaveBeenCalledWith('active');

    fireEvent.click(screen.getByText('Completed'));
    expect(mockSetFilter).toHaveBeenCalledWith('completed');
  });

  it('should apply the active style to the selected filter', () => {
    render(<TaskFooter {...footerProps} filter="active" />);

    const activeButton = screen.getByText('Active');
    expect(activeButton).toHaveClass('text-bright-blue font-bold');
  });

  it('should call clearCompleted when clicking "Clear Completed"', () => {
    render(<TaskFooter {...footerProps} />);

    fireEvent.click(screen.getByText('Clear Completed'));
    expect(mockClearCompleted).toHaveBeenCalledTimes(1);
  });
});
