import { z } from "zod";

export const TaskSchema = z.object({
  taskTitle: z.string().min(1, "Task title is required"),
  taskDescription: z.string().min(1, "Task description is required"),
});

export type TaskFormData = z.infer<typeof TaskSchema>;
