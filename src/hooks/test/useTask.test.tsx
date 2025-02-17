import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTask } from '../useTask';
import { TaskContext } from '../../context/taskContext';

const mockSetTasks = vi.fn();

const mockTaskContext = {
  tasks: [
    {
      id: '1',
      title: 'Dummy Title 1',
      description: 'Task 1',
      priority: 3,
      completed: false,
    },
    {
      id: '2',
      title: 'Dummy Title 2',
      description: 'Task 2',
      priority: 2,
      completed: true,
    },
  ],
  setTasks: mockSetTasks,
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TaskContext.Provider value={mockTaskContext}>
    {children}
  </TaskContext.Provider>
);

describe('useTask Hook', () => {
  it('should initialize with tasks from context', () => {
    const { result } = renderHook(() => useTask(), { wrapper });

    expect(result.current.tasks).toHaveLength(2);
    expect(result.current.tasks[0].description).toBe('Task 1');
  });

  it('should filter tasks based on active and completed', () => {
    const { result } = renderHook(() => useTask(), { wrapper });

    act(() => {
      result.current.setFilter('active');
    });
    expect(result.current.filteredTasks).toHaveLength(1);
    expect(result.current.filteredTasks[0].description).toBe('Task 1');

    act(() => {
      result.current.setFilter('completed');
    });
    expect(result.current.filteredTasks).toHaveLength(1);
    expect(result.current.filteredTasks[0].description).toBe('Task 2');

    act(() => {
      result.current.setFilter('all');
    });
    expect(result.current.filteredTasks).toHaveLength(2);
  });
});
