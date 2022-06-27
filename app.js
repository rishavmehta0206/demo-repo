const express = require('express')
const tasks = require('./routes/tasks')
const app = express();


app.use(express.json())

app.use('/api/v1/tasks',tasks)

app.get('/',(req,res)=>{
    res.send('home')
})

// app.get('^/$|Home(.html)?', (req, res) => {
//     res.send('home')
// })

// app.get('/*',(req,res)=>{
//     res.send('Error!! Page not found')
// })

app.listen(5000,()=>{})