import { User } from "./user";

export type TodoItemDescription = string;

export type TodoItem = {
  id: UniqueId;
  assignee: User;
  name: string;
  description: TodoItemDescription;
  dueDate: Date;
};
