import React from "react";
import Task, { TaskProps } from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args: TaskProps) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "0001",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
