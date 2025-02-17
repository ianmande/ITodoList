import { Checkbox } from '../checkbox/Checkbox';
import { Cross } from '../icons/cross';

interface TaskProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  handleDelete: () => void;
}

export const Task = ({
  task,
  completed,
  onToggle,
  handleDelete,
}: TaskProps) => {
  return (
    <div className="cursor-pointer flex justify-between px-3.5 py-5 border-b-[0.8px] border-light-grayish-blue dark:border-dark-grayish-blue-dark hover:opacity-65">
      <div className="flex items-center gap-1.5">
        <Checkbox checked={completed} onToggle={onToggle} />
        <span
          className={`ml-2 text-md font-normal ${
            completed
              ? 'line-through text-gray-400'
              : 'text-very-dark-grayish-blue dark:text-light-grayish-blue-dark'
          }`}
        >
          {task}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="text-gray-500 hover:text-red-500 transition text-2xl"
      >
        <Cross className="cursor-pointer hover:fill-red-500 fill-[#494C6B] duration-300 ease-in-out" />
      </button>
    </div>
  );
};
