const getAllTasks = (req,res) => {
    res.send('all tasks from file')
}

const createTask = (req,res) => {
    res.json(req.body)
}
const getTask = (req,res) => {
    res.send({id:req.params.id})
}
const updateTask = (req,res) => {
    res.send('update a task')
}
const deleteTask = (req,res) => {
    res.send('dalete a task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}