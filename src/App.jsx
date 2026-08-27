import { useEffect, useState } from 'react'
import EmpForm from './Components/Emp-Form'
import './Components/CRUD.css'
import EmpSearch from './Components/Emp-Search'
import Stats from './Components/Stats'

function App() {
  const [emps, setEmp] = useState(()=>{
    const saved = localStorage.getItem("emps")
    return saved ? JSON.parse(saved) : []
  })



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
        <Stats emps={emps}/>
        <EmpSearch emps={emps} setEmps={setEmp}/>
      </div>
    </>
  )
}

export default App
