import { Id, Task } from "@/types";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import TrashIcon from "@/icons/TrashIcon";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (editMode) {
    return (
      <Card className="flex justify-between items-center p-5 bg-violet-200 h-[6rem] cursor-grab">
        <Textarea
          className="w-full bg-transparent outline-none focus:outline-none focus:ring-0"
          value={task.content}
          autoFocus
          placeholder="Task content"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) toggleEditMode();
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </Card>
    );
  }

  return (
    <Card
      className="flex justify-between items-center p-5 bg-violet-200 h-[6rem] cursor-grab"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      onClick={toggleEditMode}
    >
      <p className="text-center h-[90%] overflow-x-auto whitespace-pre-wrap">
        {task.content}
      </p>
      {mouseIsOver && (
        <Button className="" onClick={() => deleteTask(task.id)}>
          <TrashIcon />
        </Button>
      )}
    </Card>
  );
}

export default TaskCard;
