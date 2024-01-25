import { DragEndEvent } from "@dnd-kit/core";

type setColumns = {
    id: string
}

type columnCB = (column: setColumns) => void;

export const onDragEnd = (event: DragEndEvent, setColumns: columnCB) => {
    const { active, over } = event
    if (!over) return;
    const activeid = active.id
    const overid = over.id
    if (overid === activeid) return;

    const isActiveColumn = active.data.current?.type === "Column"
    setColumns((addColumns) => {
        console.log(addColumns)
        
    })
}