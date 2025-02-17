export const NoTasks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-center text-gray-500 dark:text-gray-400">
      <p className="text-lg font-semibold">No tasks available</p>
      <p className="text-sm">Add a new task to get started!</p>
    </div>
  );
};
