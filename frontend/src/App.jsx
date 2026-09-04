import { useEffect, useState } from 'react'
import EmpForm from './Components/Emp-Form'
import './Components/CRUD.css'
import EmpSearch from './Components/Emp-Search'
import Stats from './Components/Stats'
import EmpTable from './Components/Emp-Table'
import Pagination from './Components/Pagination'

function App() {
  const [emps, setEmp] = useState([])
  const [page, setPage] = useState(1)
  const [stats, setStats] = useState({
      totalEmployees: 0,
      activeEmployees: 0,
      totalDepartments: 0,
      avgSalary: 0
  })
  const [totalPages, setTotalPages] = useState(0)
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");


  function addEmp(newEmp){
    
    fetch("http://localhost:3000/api/emps", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newEmp)
    })
      .then((response) => response.json())
      .then((data)=>{
          console.log("Employee Added Successfully... ")
          setEmp([...emps, data])
          fetchStats()
      })
      .catch((e)=>{
          console.log("Error Adding Employee: ", e)
      })

  }

  const fetchStats = () => {
      fetch("http://localhost:3000/api/emps/stats")
          .then(response => response.json())
          .then(data => {
              setStats(data);
          })
          .catch(error => {
              console.log("Error fetching stats:", error);
          });
  }

  useEffect(()=>{
    fetchStats()
  }, [])

  useEffect(()=>{  
      fetch(`http://localhost:3000/api/emps?page=${page}&limit=5&search=${search}&dep=${department}`)
        .then((response) => {
            
            const totalEmployees = Number(response.headers.get("X-Total-Employees"));
            console.log("total emps header ", totalEmployees)
            setTotalPages(Math.ceil(totalEmployees / 5));

            return response.json()
        })
        .then((data)=> {
            console.log("Emplyee Data Fetched Successfully...")
            setEmp(data)
        })
        .catch((e)=>{
            console.log("Error Fetching Details: ", e)
        })
  },[page, search, department])

  console.log(emps)

  return (
    <>
      <div>
        <EmpForm addEmp={addEmp}/><br />
        <Stats stats={stats}/>
        <EmpSearch setSearch={setSearch} setDepartment={setDepartment} setPage={setPage} />
        <EmpTable emps={emps} employees={emps} setEmp={setEmp} />
        <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
      </div>
    </>
  )
}

export default App
