export default function Stats({ stats }){
    return(
        <>
            <div className="statsDiv">
                <div>
                    <p>Total</p>
                    <h1>{stats.totalEmployees}</h1>
                </div>
                <div>
                    <p>Active</p>
                    <h1>{stats.activeEmployees}</h1>
                </div>
                <div>
                    <p>Departments</p>
                    <h1>{stats.totalDepartments}</h1>
                </div>
                <div>
                    <p>Average Salary</p>
                    <h1>₹{Math.round(stats.avgSalary).toLocaleString("en-IN")}</h1>
                </div>
            </div>
        </>
    )
}