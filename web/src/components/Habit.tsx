interface HabitProps {
  completed: number;
}

export function Habit({ completed }: HabitProps) {
  return (
    <div className="bg-purple-900 w-10 h-10 flex items-center justify-center text-gray-50 rounded">
      {completed}
    </div>
  );
}
