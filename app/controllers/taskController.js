import * as taskService from '../services/taskService.js';
import { setResponse, setError } from './responseHandler.js';

// Get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        setResponse(tasks, res);
    } catch (error) {
        setError(error, res);
    }
};

// Get tasks by filter
export const getTasksByFilter = async (req, res) => {
    try {
        const { title, description, completed, startDate, endDate } = req.query;
        const filters = {};   //empty object to store new query parameters

        if (title) {
            filters.title = new RegExp(title, 'i'); // Case-insensitive regex for title
        }

        if (description) {
            filters.description = new RegExp(description, 'i'); // Case-insensitive regex for description
        }

        if (startDate || endDate) {
            filters.createdDate = {};
            if (startDate) {
                filters.createdDate.$gte = new Date(startDate); // Greater than or equal to startDate
            }
            if (endDate) {
                filters.createdDate.$lte = new Date(endDate); // Less than or equal to endDate
            }
        }

        if (req.query.completed !== undefined) {
            filters.completed = req.query.completed === 'true';
        }
    
        const tasks = await taskService.getTasksByFilter(filters);
        setResponse(tasks, res);
    } catch (error) {
        setError(error, res);
    }
};

// Create a new task
export const createTask = async (req, res) => {
    try {
        
        const taskData = {...req.body};
        const task = await taskService.createTask(taskData);
        setResponse(task, res);
    } catch (error) {
        setError(error, res);
    }
};

// Get a task by ID
export const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskService.getTaskById(taskId);
        setResponse(task, res);
    } catch (error) {
        setError(error, res);
    }
};

// Update a task by ID
export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updateData = {...req.body};
        const task = await taskService.updateTask(taskId, updateData);
        setResponse(task, res);
    } catch (error) {
        setError(error, res);
    }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskService.deleteTask(taskId);
        setResponse({}, res);
    } catch (error) {
        setError(error, res);
    }
};


