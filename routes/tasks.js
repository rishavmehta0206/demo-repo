const express = require('express');
const { getAllTasks, getTask, deleteTask, createTask, updateTask } = require('../controllers/tasks')
const tasks = express.Router()

tasks.route('/').get(getAllTasks).post(createTask)
tasks.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = tasks;