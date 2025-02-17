import { useState } from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { createTask } from '../../api/requests';
import { useTask } from '../../hooks/useTask';
import { toast } from 'react-toastify';

export const CreateTask = () => {
  const { addedTask } = useTask();
  const [completed, setCompleted] = useState(false);
  const [task, setTask] = useState('');

  const onToggle = () => setCompleted((prev) => !prev);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter' && task.trim()) {
      try {
        const response = await createTask({
          description: task,
          priority: 0,
          completed,
        });

        addedTask(response.data);
      } catch (error) {
        console.error('Error creating task:', error);
        toast.error('Error creating task');
      } finally {
        setTask('');
        setCompleted(false);
      }
    }
  };

  return (
    <div className="w-full bg-white dark:bg-very-dark-desaturated-blue rounded-sm shadow-lg">
      <div className="px-3.5 py-5 flex items-center gap-1.5">
        <Checkbox checked={completed} onToggle={onToggle} />
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task"
          className={`ml-2 text-md font-normal w-full bg-white dark:bg-very-dark-desaturated-blue p-0 border-0 border-white w-full${
            completed
              ? 'line-through text-gray-400'
              : 'text-very-dark-grayish-blue dark:text-light-grayish-blue-dark'
          }`}
        />
      </div>
    </div>
  );
};
