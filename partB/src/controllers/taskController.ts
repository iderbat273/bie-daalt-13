import { Request, Response } from "express";
import { createTask, deleteTask, listTasks, updateTask } from "../services/taskService";

export function createTaskHandler(req: Request, res: Response) {
  try {
    const task = createTask(req.body);
    res.status(201).json(task);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export function listTasksHandler(req: Request, res: Response) {
  try {
    const { status, priority, search } = req.query;

    const tasks = listTasks({
      status: status as any,
      priority: priority as any,
      search: search as any,
    });

    res.json(tasks);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export function updateTaskHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const task = updateTask(id, req.body);
    res.json(task);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
}

export function deleteTaskHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    deleteTask(id);
    res.status(204).send();
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
}
