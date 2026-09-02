export default function Stats({emps}){
    
    const activeEmps = emps.filter(emp => emp.active === "Yes")
    const departments = new Set(emps.map(emp => emp.dep))
    const totalSalary = emps.reduce((total, emp) => {
        return total + emp.salary;
    }, 0);
    const avgSalary = totalSalary / emps.length;

    return(
        <>
            <div className="statsDiv">
                <div>
                    <p>Total</p>
                    <h1>{emps.length}</h1>
                </div>
                <div>
                    <p>Active</p>
                    <h1>{activeEmps.length}</h1>
                </div>
                <div>
                    <p>Departments</p>
                    <h1>{departments.size}</h1>
                </div>
                <div>
                    <p>Average Salary</p>
                    <h1>₹{Math.round(avgSalary).toLocaleString("en-IN")}</h1>
                </div>
            </div>
        </>
    )
}