import mongoose from 'mongoose';
import config from './schema-config.js';

const taskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true },
    description: { 
        type: String, 
        required: true },
    createdDate: { 
        type: Date, 
        default: Date },
    completed: { 
        type: Boolean, 
        default: false },
   
}, config);

const Task = mongoose.model('Task', taskSchema);

export default Task;
