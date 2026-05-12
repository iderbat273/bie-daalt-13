import { Router } from "express";
import {
  createTaskHandler,
  deleteTaskHandler,
  listTasksHandler,
  updateTaskHandler,
} from "../controllers/taskController";

const router = Router();

router.post("/tasks", createTaskHandler);
router.get("/tasks", listTasksHandler);
router.put("/tasks/:id", updateTaskHandler);
router.delete("/tasks/:id", deleteTaskHandler);

export default router;
