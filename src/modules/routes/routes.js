const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  changeTaskFilter,
  deleteTask
} = require('../controllers/task.controller');

// Tasks routes
router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.patch('/updateTask', changeTaskInfo);
router.patch('/updateTaskFilter', changeTaskFilter);
router.delete('/deleteTask', deleteTask);

//User routes

module.exports = router;