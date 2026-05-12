import { v4 as uuidv4 } from "uuid";
import { Task, TaskPriority, TaskStatus } from "../models/task";
import {
  addTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from "../repository/taskRepository";
import {
  validateDueDate,
  validatePriority,
  validateStatus,
  validateTitle,
} from "../validators/taskValidator";

export function createTask(data: any): Task {
  const now = new Date().toISOString();

  const task: Task = {
    id: uuidv4(),
    title: validateTitle(data.title),
    description: typeof data.description === "string" ? data.description : undefined,
    status: "todo",
    priority: validatePriority(data.priority ?? "medium"),
    dueDate: validateDueDate(data.dueDate),
    createdAt: now,
    updatedAt: now,
  };

  return addTask(task);
}

export function listTasks(query?: {
  status?: TaskStatus;
  priority?: TaskPriority;
  search?: string;
}): Task[] {
  let tasks = getAllTasks();

  if (query?.status) {
    tasks = tasks.filter((t) => t.status === query.status);
  }

  if (query?.priority) {
    tasks = tasks.filter((t) => t.priority === query.priority);
  }

  if (query?.search) {
    const keyword = query.search.toLowerCase();
    tasks = tasks.filter((t) => t.title.toLowerCase().includes(keyword));
  }

  return tasks;
}

export function updateTask(id: string, data: any): Task {
  const existing = getTaskById(id);
  if (!existing) throw new Error("task not found");

  const updatedFields: Partial<Task> = {};

  if (data.title !== undefined) updatedFields.title = validateTitle(data.title);
  if (data.priority !== undefined) updatedFields.priority = validatePriority(data.priority);
  if (data.status !== undefined) updatedFields.status = validateStatus(data.status);
  if (data.dueDate !== undefined) updatedFields.dueDate = validateDueDate(data.dueDate);

  if (data.description !== undefined) {
    if (typeof data.description !== "string") throw new Error("description must be a string");
    updatedFields.description = data.description;
  }

  const updated = updateTaskById(id, updatedFields);
  if (!updated) throw new Error("task not found");

  return updated;
}

export function deleteTask(id: string): void {
  const ok = deleteTaskById(id);
  if (!ok) throw new Error("task not found");
}
