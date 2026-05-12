import { TaskPriority, TaskStatus } from "../models/task";

export function validateTitle(title: unknown): string {
  if (typeof title !== "string") throw new Error("title must be a string");
  if (title.trim().length === 0) throw new Error("title is required");
  return title.trim();
}

export function validatePriority(priority: unknown): TaskPriority {
  const allowed: TaskPriority[] = ["low", "medium", "high"];
  if (!allowed.includes(priority as TaskPriority)) {
    throw new Error("priority must be low, medium, or high");
  }
  return priority as TaskPriority;
}

export function validateStatus(status: unknown): TaskStatus {
  const allowed: TaskStatus[] = ["todo", "in_progress", "done"];
  if (!allowed.includes(status as TaskStatus)) {
    throw new Error("status must be todo, in_progress, or done");
  }
  return status as TaskStatus;
}

export function validateDueDate(dueDate: unknown): string | undefined {
  if (dueDate === undefined) return undefined;
  if (typeof dueDate !== "string") throw new Error("dueDate must be a string");

  const parsed = Date.parse(dueDate);
  if (isNaN(parsed)) throw new Error("dueDate must be a valid ISO date string");

  return dueDate;
}
