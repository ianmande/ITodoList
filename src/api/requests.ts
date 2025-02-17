import { request } from './service';

const URL_PREFIX = '/api/task';

export const getAllTasks = async () => {
  try {
    const response = await request(`${URL_PREFIX}/get-all`, {
      method: 'GET',
    });

    return response;
  } catch (error) {
    console.error('Error fetching all tasks:', error);
    throw error;
  }
};

export const createTask = async (taskData: {
  description: string;
  priority: number;
  completed: boolean;
}) => {
  try {
    const response = await request(`${URL_PREFIX}/create`, {
      method: 'POST',
      data: taskData,
    });

    return response;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (
  taskId: string,
  updatedData: { description: string; completed: boolean }
) => {
  try {
    const response = await request(`${URL_PREFIX}/edit`, {
      method: 'PUT',
      data: { id: taskId, task: updatedData },
    });

    return response;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await request(`${URL_PREFIX}/remove`, {
      method: 'DELETE',
      data: { id: taskId },
    });

    return response;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

export const deleteTaskCompleted = async () => {
  try {
    const response = await request(`${URL_PREFIX}/clear-completed`, {
      method: 'DELETE',
      data: {},
    });

    return response;
  } catch (error) {
    console.error('Error deleting tasks:', error);
    throw error;
  }
};
