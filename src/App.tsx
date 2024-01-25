import './globals.css'
import { Card } from './components/ui/card'
import { useState } from 'react';

function App() {

  const [status, setStatus] = useState('');

  
  return (
    <main className="flex bg-red-500 h-full w-[80%] justify-around p-5">
      <div className="flex flex-col gap-2 min-w-[22%] max-w-[24%]">
        <h2 className="text-3xl text-center font-bold">To-do</h2>
        {status === "todo" && (
          <Card className="p-3">
            <h3 className="text-xl font-bold">Create a new project</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>
          </Card>
        )}
      </div>
      <div className="flex flex-col gap-2 min-w-[22%] max-w-[24%]">
        <h2 className="text-3xl text-center font-bold">Doing</h2>
        {status === "doing" && (
          <Card className="p-3">
            <h3 className="text-xl font-bold">Create a new project</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>
          </Card>
        )}
      </div>
      <div className="flex flex-col gap-2 min-w-[22%] max-w-[24%]">
        <h2 className="text-3xl text-center font-bold">Issues</h2>
        {status === "issues" && (
          <Card className="p-3">
            <h3 className="text-xl font-bold">Create a new project</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>
          </Card>
        )}
      </div>
      <div className="flex flex-col gap-2 min-w-[22%] max-w-[24%]">
        <h2 className="text-3xl text-center font-bold">Done</h2>
        {status === "done" && (
          <Card className="p-3">
            <h3 className="text-xl font-bold">Create a new project</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>
          </Card>
        )}
      </div>
    </main>
  );
}

export default App
