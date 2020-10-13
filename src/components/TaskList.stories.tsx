import React from "react";
import { Story } from "@storybook/react/";
import TaskList, { TaskListProps } from "./TaskList";

export default {
  component: TaskList,
  title: "TaskList",
};

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      id: "0001",
      title: "Test Task",
      state: "TASK_INBOX",
    },
    {
      id: "0002",
      title: "Test Task",
      state: "TASK_PINNED",
    },
    {
      id: "0003",
      title: "Test Task",
      state: "TASK_ARCHIVED",
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  tasks: [],
};
