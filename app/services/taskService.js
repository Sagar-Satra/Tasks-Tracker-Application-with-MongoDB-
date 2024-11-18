// services/taskService.js

import Task from '../models/task.js';

// Get all tasks
export const getAllTasks = async () => {
    return await Task.find().exec();
};

// Get tasks by filter
export const getTasksByFilter = async (filters) => {
    return await Task.find(filters).exec();
};

// Create a new task
export const createTask = async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
};

// Get a task by ID
export const getTaskById = async (taskId) => {
    return await Task.findById(taskId).exec();
};

// Update a task by ID
export const updateTask = async (taskId, updateData) => {
    
    return await Task.findByIdAndUpdate(taskId, updateData, { new: true }).exec();
};

// Delete a task by ID
export const deleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId).exec();
};

