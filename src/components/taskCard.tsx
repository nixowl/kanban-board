import { Id, Task } from "@/types";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import TrashIcon from "@/icons/TrashIcon";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
  };
  
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
   return (
     <Card
       ref={setNodeRef}
       style={style}
        className="flex justify-between items-center p-5 bg-violet-200 h-[6rem] opacity-50 ring-2 ring-ring" />

   );
  }

  if (editMode) {
    return (
      <Card
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="flex justify-between items-center p-5 bg-violet-200 h-[6rem] cursor-grab">
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
      className="flex justify-between items-center p-5 bg-violet-200 h-[6rem] cursor-grab task"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      onClick={toggleEditMode}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <p className="my-auto w-[60%] text-center h-[90%] overflow-x-hidden overflow-y-auto whitespace-pre-wrap">
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
