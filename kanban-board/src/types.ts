export type TaskStatus = 'TODO' | 'In_Progress' | 'Done'

export type Task = {
    id: string;
    status: TaskStatus;
    title: string;
    description: string;
}

export type Column = {
    id: TaskStatus;
    title: string;
}