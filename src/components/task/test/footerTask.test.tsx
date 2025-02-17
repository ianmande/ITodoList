import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskFooter } from '../../task/TaskFooter';

type ITypes = 'all' | 'active' | 'completed';

describe('TaskFooter Component', () => {
  const mockSetFilter = vi.fn();
  const mockClearCompleted = vi.fn();

  const mockFilter: ITypes = 'all';

  const footerProps = {
    taskNumbers: 5,
    filter: mockFilter,
    setFilter: mockSetFilter,
    clearCompleted: mockClearCompleted,
  };

  it('should display the correct number of tasks left', () => {
    render(<TaskFooter {...footerProps} />);

    expect(screen.getByText('5 items left')).toBeDefined();
  });

  it('should call setFilter when clicking on filter buttons', () => {
    render(<TaskFooter {...footerProps} />);

    fireEvent.click(screen.getByText('Active'));
    expect(mockSetFilter).toHaveBeenCalledWith('active');

    fireEvent.click(screen.getByText('Completed'));
    expect(mockSetFilter).toHaveBeenCalledWith('completed');
  });

  it('should call clearCompleted when clicking "Clear Completed"', () => {
    render(<TaskFooter {...footerProps} />);

    fireEvent.click(screen.getByText('Clear Completed'));
    expect(mockClearCompleted).toHaveBeenCalledTimes(1);
  });
});
