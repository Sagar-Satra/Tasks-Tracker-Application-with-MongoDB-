import express from 'express';
import * as taskController from '../controllers/taskController.js';

const router = express.Router();

router.route('/')     // /tasks/ === /tasks
    .get(taskController.getAllTasks)
    .post(taskController.createTask);

router.route('/filter')
    .get(taskController.getTasksByFilter);

router.route('/:id')
    .get(taskController.getTaskById)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

export default router;
