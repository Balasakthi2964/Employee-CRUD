import { useEffect, useState } from 'react'
import EmpForm from './Components/Emp-Form'
import './Components/CRUD.css'
import EmpTable from './Components/Emp-Table'
import EmpSearch from './Components/Emp-Search'

function App() {
  const [emps, setEmp] = useState(()=>{
    const saved = localStorage.getItem("emps")
    return saved ? JSON.parse(saved) : []
  })
  const [listpage, setListpage] = useState(false)

  function addEmp(newEmp){
    setEmp([...emps,newEmp])
  }


  useEffect(()=>{
    localStorage.setItem("emps", JSON.stringify(emps))
  },[emps])

  return (
    <>
      <div>
        <EmpForm addEmp={addEmp}/><br />
        <EmpSearch emps={emps} setEmps={setEmp}/>
      </div>
    </>
  )
}

export default App
