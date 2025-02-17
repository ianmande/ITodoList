import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CreateTask } from '../CreateTask';
import { createTask } from '../../../api/requests';
import { useTask } from '../../../hooks/useTask';

vi.mock('../../../hooks/useTask', async () => {
  const actual = await vi.importActual('../../../hooks/useTask');
  return {
    ...actual,
    useTask: vi.fn(() => ({
      addedTask: vi.fn(),
    })),
  };
});

// ✅ Mock de `createTask`
vi.mock('../../api/requests', () => ({
  createTask: vi.fn(),
}));

describe('CreateTask Component', () => {
  it('should render input and checkbox', () => {
    render(<CreateTask />);
    expect(screen.getByPlaceholderText('Add a new task')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should update input value when typing', () => {
    render(<CreateTask />);
    const input = screen.getByPlaceholderText('Add a new task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input).toHaveValue('New Task');
  });
});
