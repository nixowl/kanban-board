import { Column, Id, Task } from "@/types";
import { Button } from "./ui/button";
import TrashIcon from "@/icons/TrashIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { Input } from "./ui/input";
import PlusIcon from "@/icons/PlusIcon";
import TaskCard from "./TaskCard";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  updateTask: (id: Id, content: string) => void;
  createTask: (columnId: Id) => void;
  deleteTask: (taskId: Id) => void;
  tasks: Task[];
}

function ColumnContainer(props: Props) {
  const {
    column,
    deleteColumn,
    updateColumn,
    createTask,
    tasks,
    deleteTask,
    updateTask,
  } = props;
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      bg-slate-100
      w-[20rem]
      h-[40rem]
      max-h-[40rem]
      opacity-30
      rounded-lg
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
      bg-slate-100
      w-[20rem]
      h-[40rem]
      max-h-[40rem]
      rounded-lg
      flex
      flex-col
      "
    >
      <div
        {...attributes}
        {...listeners}
        onClick={() => setEditMode(true)}
        className="
          bg-slate-600
          rounded-t-lg
          h-[3rem]
          cursor-grab
          p-3
          text-md
          font-bold
          border-3
          border-slate-100
          flex
          items-center
          justify-between
          "
      >
        <div className="flex gap-2">
          <div
            className="
              flex
              justify-center
              items-center
              bg-slate-500
              px-3
              py-2
              text-sm
              rounded-full
              "
          >
            0
          </div>
          {!editMode && column.title}
          {editMode && (
            <Input
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => setEditMode(false)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
              type="text"
              placeholder="Column title"
            />
          )}
        </div>
        <Button
          onClick={() => {
            deleteColumn(column.id);
          }}
          variant="secondary"
          className="
              px-1
              py-1
              bg-slate-600
              hover:bg-slate-500
              "
        >
          <TrashIcon />
        </Button>
      </div>

      <div
        className="
          flex
        flex-grow
        flex-col
        gap-4
        p-2
        overflow-x-hidden
        overflow-y-auto
        "
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
      <Button
        className="
          flex 
          gap-2
          hover:bg-slate-300
          active:bg-slate-500
          ring-ring
          active:ring-2
          "
        variant="ghost"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusIcon /> Add task
      </Button>
    </div>
  );
}

export default ColumnContainer;