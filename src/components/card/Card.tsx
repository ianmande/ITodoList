import { useEffect, useState } from 'react';
import {
  deleteTask,
  deleteTaskCompleted,
  getAllTasks,
  updateTask,
} from '../../api/requests';

import { useTask } from '../../hooks/useTask';
import { Task as ITask } from '../../types';

import { Task } from '../task/Task';
import { TaskFooter } from '../task/TaskFooter';
import { NoTasks } from '../task/NoTasks';
import { Loader } from '../loader/Loader';
import { toast } from 'react-toastify';

export const Card = () => {
  const { setTasks, filteredTasks, setFilter, filter } = useTask();
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getAllTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      toast.error('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
      toast.error('Failed to delete task');
    }
  };

  const onToggleTask = async ({ id, completed, description }: ITask) => {
    try {
      const response = await updateTask(id, {
        completed: !completed,
        description,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? { ...task, completed: response.data.completed }
            : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Failed to update task');
    }
  };

  const clearCompleted = async () => {
    try {
      await deleteTaskCompleted();
      setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
      toast.success('All completed tasks cleared!');
    } catch (error) {
      console.error('Error clearing tasks:', error);
      toast.error('Failed to clear completed tasks');
    }
  };
  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full bg-white dark:bg-very-dark-desaturated-blue rounded-sm shadow-lg">
      <div>
        {loading ? (
          <Loader />
        ) : filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <Task
              key={index}
              task={task.description}
              completed={task.completed}
              onToggle={() => onToggleTask(task)}
              handleDelete={() => handleDelete(task.id)}
            />
          ))
        ) : (
          <NoTasks />
        )}

        <TaskFooter
          taskNumbers={filteredTasks.length}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
};
