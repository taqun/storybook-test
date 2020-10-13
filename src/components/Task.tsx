import React from "react";

export interface TaskData {
  id: string;
  title: string;
  state: string;
}

export interface TaskProps {
  task: TaskData;
  onArchive: (event: React.MouseEvent) => {};
}

const Task = (props: TaskProps) => {
  const task = props.task;

  return (
    <div className={`list-item ${task.state}`}>
      <input
        className="list-item-check"
        type="checkbox"
        defaultChecked={task.state === "TASK_ARCHIVED"}
        disabled={true}
      />
      <input
        className="list-item-label"
        type="text"
        value={task.title}
        readOnly={true}
      />
      {task.state !== "TASK_ARCHIVED" && (
        <button
          onClick={(event) => {
            props.onArchive(event);
          }}
        >
          Archive
        </button>
      )}
      {task.state === "TASK_PINNED" && <span>pinned</span>}
    </div>
  );
};

export default Task;
