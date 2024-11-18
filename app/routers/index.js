import taskRouter from './taskRouter.js';

const initRoutes = (app) => {
    app.use('/tasks', taskRouter); // Mount taskRouter under '/tasks' path
};

export default initRoutes;
