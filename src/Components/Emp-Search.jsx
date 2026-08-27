import { useState } from "react"
import EmpTable from "./Emp-Table"

export default function EmpSearch({emps, setEmps}){

    const [searchname, setSearchname] = useState("")
    const [searchdep, setSearchdep] = useState("")
    
    const foundEmp = emps.filter((emp) =>{
        const nameMatch = emp.name.toLowerCase().includes(searchname.toLowerCase());
        const departmentMatch = emp.dep.toLowerCase().includes(searchdep.toLowerCase());
        return nameMatch && departmentMatch
    }
    )
        
    return(
        <>
            <div className="searchForm">
                <form >
                    <input type="text" placeholder="Search Employee" onChange={(e)=>{setSearchname(e.target.value)}} value={searchname}/>
                    <select onChange={(e)=>{setSearchdep(e.target.value)}} value={searchdep}>
                        <option value="">All</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Operations">Operations</option>
                        <option value="Sales">Sales</option>
                    </select>
                </form>
            </div>
            {foundEmp && <EmpTable emps={foundEmp} employees={emps} setEmps={setEmps}/> }
        </>
    )
}