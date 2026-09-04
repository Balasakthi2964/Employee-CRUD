const cors = require('cors')
const express = require('express')
const db = require('./DB')
const app = express()
const Emp = require('./Model')

app.use(cors({
    exposedHeaders: ["X-Total-Employees"]
}));
app.use(express.json())

app.post('/api/emps', async (req, res) => {
    const emp = new Emp(req.body)
    const saved = await emp.save()
    res.json(saved)
})

app.get("/api/emps/stats", async (req, res) => {

    const totalEmployees = await Emp.countDocuments();

    const activeEmployees = await Emp.countDocuments({
        active: "Yes"
    });

    const departments = await Emp.distinct("dep");

    const salaryResult = await Emp.aggregate([
        {
            $group: {
                _id: null,
                avgSalary: { $avg: "$salary" }
            }
        }
    ]);

    res.json({
        totalEmployees,
        activeEmployees,
        totalDepartments: departments.length,
        avgSalary: salaryResult[0]?.avgSalary || 0
    });
});

app.get('/api/emps', async (req, res)=>{
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const search = req.query.search || "";
    const dep = req.query.dep || "";

    const filter = {};

    if (search) {
        filter.name = {

            $regex: search,
            $options: "i"
        };
    }

    if (dep) {
        filter.dep = dep;
    }

    const skip = (page - 1) * limit;

    const emps = await Emp.find(filter)
        .sort({id: 1})
        .skip(skip)
        .limit(limit);

    const totalEmployees = await Emp.countDocuments(filter);
    
    res.set("X-Total-Employees", totalEmployees.toString());

    res.json(emps);
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