interface TaskProps {
  checked: boolean;
  onToggle: () => void;
}

export const Checkbox = ({ checked, onToggle }: TaskProps) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onToggle}
      className="w-6 h-6 text-purple-500 border-dark-grayish-blue-dark rounded-2xl overflow-hidden focus:ring-purple-400 cursor-pointer dark:bg-very-dark-desaturated-blue"
    />
  );
};
