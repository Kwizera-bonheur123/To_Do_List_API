import { addTask, deleteTask, selectTasks, updateTask } from "../controler/todo";
import fileUpload from "../Helper/multer";
import express from "express";

const taskRoute = express.Router();

taskRoute.post("/addTask", fileUpload.single("task"), addTask);
taskRoute.put("/updateTask/:id",fileUpload.single("task"),updateTask)
taskRoute.get("/selectTask",selectTasks)
taskRoute.delete("/deleteTask/:id",deleteTask)

export default taskRoute