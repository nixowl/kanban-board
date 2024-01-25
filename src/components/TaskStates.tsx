import React, { useState } from "react";
import { DragEndEvent, DragStartEvent, useDroppable } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

const testTasks = [
  {
    id: 1,
    content: "fkjdlksfjlskdfjklsdlk",
    columnid: "done",
  },
  {
    id: 2,
    content: "adiaofdadasdasdasscvosicvsdjad",
    columnid: "todo",
  },
];

const testColumns = [
  {
    id: "todo",
  },
  {
    id: "doing",
  },
  {
    id: "issue",
  },
  {
    id: "done",
  },
];

type Task = {
  id: number;
  content: string;
  columnid: string;
};

type Col = {
  id: string;
};

export function TaskStates() {
  const [columns, setColumns] = useState<Col[]>(testColumns);
  const [tasks, setTasks] = useState<Task[]>(testTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [activeCol, setActiveCol] = useState<Col | null>(null);

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeid = active.id;
    const overid = over.id;
    if (overid === activeid) return;

    const isActiveColumn = active.data.current?.type === "Column";

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeid);
      const overColumnIndex = columns.findIndex((col) => col.id === overid);
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  };

  const onDragStart = (event: DragStartEvent) => {};

  return (
    <section className="grid grid-cols-4 bg-blue-500 p-4 gap-6 flex-1 w-[50px]">
      <DndContext></DndContext>
    </section>
  );
}
