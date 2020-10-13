import React from "react";
import Task, { TaskData } from "./Task";

export interface TaskListProps {
  loading: boolean;
  tasks: TaskData[];
  onArchive: (event: React.MouseEvent) => {};
}

const TaskList = (props: TaskListProps) => {
  if (props.loading) {
    return <div className="list-items loading">Loading...</div>;
  }

  if (props.tasks.length === 0) {
    return <div className="list-items empty">You have no tasks!</div>;
  }

  return (
    <div className="list-items">
      {props.tasks.map((data) => (
        <Task task={data} onArchive={props.onArchive} />
      ))}
    </div>
  );
};

export default TaskList;
