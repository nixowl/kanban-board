import { Id, Task } from "@/types"
import { Card } from "./ui/card"
import { Button } from "./ui/button";
import TrashIcon from "@/icons/TrashIcon";
import { useState } from "react";

interface Props {
    task: Task;
    deleteTask: (id: Id) => void;
}

function TaskCard({ task, deleteTask }: Props) {
    const [mouseIsOver, setMouseIsOver] = useState(false);
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode((prev) => !prev)
        setMouseIsOver(false)
    }

    if (editMode) {
        return <>editMODEEEEEEEEEEEEEEEEE</>
    }
    
  return (
      <Card
          className="flex justify-between items-center p-5 bg-violet-200 h-[6rem] cursor-grab"
          onMouseEnter={() => setMouseIsOver(true) }
          onMouseLeave={() => setMouseIsOver(false)}
          onClick={toggleEditMode}
      >
          {task.content}
          {mouseIsOver &&(
              <Button className=""
                  onClick={() =>
            deleteTask(task.id)}><TrashIcon /></Button>
          )}
    </Card>
  )
}

export default TaskCard