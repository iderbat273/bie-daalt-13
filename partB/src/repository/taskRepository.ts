import { Task } from "../models/task";

const tasks: Task[] = [];

export function addTask(task: Task): Task {
  tasks.push(task);
  return task;
}

export function getAllTasks(): Task[] {
  return tasks;
}

export function getTaskById(id: string): Task | undefined {
  return tasks.find((t) => t.id === id);
}

export function updateTaskById(id: string, updated: Partial<Task>): Task | null {
  const task = getTaskById(id);
  if (!task) return null;

  Object.assign(task, updated);
  task.updatedAt = new Date().toISOString();
  return task;
}

export function deleteTaskById(id: string): boolean {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
}
