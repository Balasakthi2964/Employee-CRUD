const cors = require('cors')
const express = require('express')
const db = require('./DB')
const app = express()
const Emp = require('./Model')

app.use(cors())
app.use(express.json())

app.post('/api/emps', async (req, res) => {
    const emp = new Emp(req.body)
    const saved = await emp.save()
    res.json(saved)
})

app.get('/api/emps', async (req, res)=>{
    const emps = await Emp.find()
    res.json(emps)
})

app.put('/api/emps/:id', async (req, res)=>{
    const updated = await Emp.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updated)
})

app.delete('/api/emps/:id', async (req, res)=>{
    await Emp.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
})

app.listen(3000, ()=>{
    console.log("server listening on http://localhost:3000")
})