import { useState } from 'react';
import type { Task,Column } from './types';

const COLUMNS: Column[] = [
  { id: 'TODO', title: 'To Do' },
  { id: 'In_Progress', title: 'In Progress' },
  { id: 'Done', title: 'Done' },
]

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    status: 'TODO',
    title: 'Task 1',
    description: 'This is task 1',
  },
  {
    id: '2',
    status: 'In_Progress',
    title: 'Task 2',
    description: 'This is task 2',
  },
  {
    id: '3',
    status: 'Done',
    title: 'Task 3',
    description: 'This is task 3',
  },
]


function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  return (
    
  )
}

export default App
