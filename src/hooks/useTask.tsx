import { useContext, useState } from 'react';

import { TaskContext } from '../context/taskContext';

import { Task } from '../types';

export const useTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addedTask = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return { tasks, setTasks, addedTask, filteredTasks, setFilter, filter };
};
