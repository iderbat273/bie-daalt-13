import { createTask, deleteTask, listTasks, updateTask } from "../src/services/taskService";

describe("Task Service Tests", () => {
  test("createTask should create task with valid input", () => {
    const task = createTask({ title: "Study", priority: "high" });
    expect(task.title).toBe("Study");
    expect(task.priority).toBe("high");
    expect(task.status).toBe("todo");
  });

  test("createTask should throw error if title is missing", () => {
    expect(() => createTask({ priority: "high" })).toThrow();
  });

  test("createTask should throw error if title is empty", () => {
    expect(() => createTask({ title: "" })).toThrow();
  });

  test("createTask should throw error if priority is invalid", () => {
    expect(() => createTask({ title: "Study", priority: "urgent" })).toThrow();
  });

  test("listTasks should return tasks", () => {
    createTask({ title: "Task A", priority: "low" });
    createTask({ title: "Task B", priority: "high" });

    const tasks = listTasks();
    expect(tasks.length).toBeGreaterThan(0);
  });

  test("listTasks should filter by priority", () => {
    const tasks = listTasks({ priority: "high" });
    for (const t of tasks) {
      expect(t.priority).toBe("high");
    }
  });

  test("listTasks should filter by status", () => {
    const task = createTask({ title: "Finish HW", priority: "medium" });
    updateTask(task.id, { status: "done" });

    const doneTasks = listTasks({ status: "done" });
    expect(doneTasks.some((t) => t.id === task.id)).toBe(true);
  });

  test("listTasks should search by keyword", () => {
    createTask({ title: "Read Book", priority: "low" });
    const result = listTasks({ search: "book" });

    expect(result.length).toBeGreaterThan(0);
    expect(result[0].title.toLowerCase()).toContain("book");
  });

  test("updateTask should update task fields", () => {
    const task = createTask({ title: "Old", priority: "low" });
    const updated = updateTask(task.id, { title: "New", priority: "high" });

    expect(updated.title).toBe("New");
    expect(updated.priority).toBe("high");
  });

  test("updateTask should throw if task not found", () => {
    expect(() => updateTask("invalid-id", { title: "X" })).toThrow("task not found");
  });

  test("deleteTask should delete existing task", () => {
    const task = createTask({ title: "Delete Me", priority: "medium" });
    expect(() => deleteTask(task.id)).not.toThrow();
  });

  test("deleteTask should throw if task not found", () => {
    expect(() => deleteTask("invalid-id")).toThrow("task not found");
  });
});
