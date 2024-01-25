import './globals.css'
import { Card } from './components/ui/card'
import { useState } from 'react';
import "@radix-ui/themes/styles.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { TaskStates } from './components/TaskStates';

function App() {

  type Task = {
    id: number;
    name: string;
    description: string;
    status: string;
    tags: Tag[] | [];
  }
  type Tag = {
    id: number;
    name: string;
  }
  const [status, setStatus] = useState('todo');
  const [task, setTask] = useState<Task>({
    id: 0,
    name: '',
    description: '',
    status: 'todo',
    tags: [],
  });

  // create tag
  // create tag array with default tags
  // custom tags by user
  // select in form tags

  
  return (
    <>
      <main className="flex bg-red-500 h-full justify-aroun w-[80%] p-5">
        <TaskStates />
        </main>
    </>
  );
}

export default App
