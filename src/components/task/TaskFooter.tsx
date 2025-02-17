import { Dispatch } from 'react';

type ITypes = 'all' | 'active' | 'completed';

interface Props {
  taskNumbers: number;
  filter: ITypes;
  setFilter: Dispatch<React.SetStateAction<ITypes>>;
  clearCompleted: () => void;
}

export const TaskFooter = ({
  taskNumbers,
  filter,
  setFilter,
  clearCompleted,
}: Props) => {
  return (
    <div className="w-full bg-white dark:bg-very-dark-desaturated-blue rounded-sm shadow-lg py-4 px-6 flex justify-between text-sm text-dark-grayish-blue dark:text-light-grayish-blue">
      <span>{taskNumbers} items left</span>

      <div className="flex gap-4">
        <button
          className={`hover:text-very-dark-grayish-blue dark:hover:text-white ${
            filter === 'all' ? 'text-bright-blue font-bold' : ''
          }`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`hover:text-very-dark-grayish-blue dark:hover:text-white ${
            filter === 'active' ? 'text-bright-blue font-bold' : ''
          }`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`hover:text-very-dark-grayish-blue dark:hover:text-white ${
            filter === 'completed' ? 'text-bright-blue font-bold' : ''
          }`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <button
        className="hover:text-very-dark-grayish-blue dark:hover:text-white"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};
