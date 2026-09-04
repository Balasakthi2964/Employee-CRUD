import { useState } from "react"

export default function EmpSearch({setSearch, setDepartment, setPage}){

    const [searchname, setSearchname] = useState("")
    const [searchdep, setSearchdep] = useState("")
    
    const handleNameSearch = (e) => {
        const value = e.target.value;

        setSearchname(value);
        setSearch(value);
        setPage(1);
    };

    const handleDepartmentSearch = (e) => {
        const value = e.target.value;

        setSearchdep(value);
        setDepartment(value);
        setPage(1);
    };
        
    return(
        <>
            <div className="searchForm">
                <form >
                    <input type="text" placeholder="Search Employee" onChange={handleNameSearch} value={searchname}/>
                    <select onChange={handleDepartmentSearch} value={searchdep}>
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
        </>
    )
}