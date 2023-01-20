import { AllTasks } from "../Components/Tasks/AllTasks";

export interface TaskListProps {
    onRemoveTask: (key: string) => void;
    tasks: {
        title: string;
        description: string;
        key: string;
    }[];
};

export function TaskList({
    tasks,
    onRemoveTask
}: TaskListProps) {
    return (
        <AllTasks
            tasks={tasks}
            onRemove={onRemoveTask}
        />
    );
};