import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Task } from '../../task/Task';

describe('Task Component', () => {
  const mockOnToggle = vi.fn();
  const mockHandleDelete = vi.fn();

  const taskProps = {
    task: 'Sample Task',
    completed: false,
    onToggle: mockOnToggle,
    handleDelete: mockHandleDelete,
  };

  it('should render task correctly', () => {
    render(<Task {...taskProps} />);

    expect(screen.getByText('Sample Task')).toBeDefined();
    expect(screen.getByRole('checkbox')).toHaveProperty('checked', false);
  });

  it('should call onToggle when clicking the checkbox', () => {
    render(<Task {...taskProps} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('should call handleDelete when clicking the delete button', () => {
    render(<Task {...taskProps} />);

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
  });
});
