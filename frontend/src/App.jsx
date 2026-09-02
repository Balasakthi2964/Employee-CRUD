import { useEffect, useState } from 'react'
import EmpForm from './Components/Emp-Form'
import './Components/CRUD.css'
import EmpSearch from './Components/Emp-Search'
import Stats from './Components/Stats'

function App() {
  const [emps, setEmp] = useState([])



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
      })
      .catch((e)=>{
          console.log("Error Adding Employee: ", e)
      })

  }


  useEffect(()=>{  
      fetch("http://localhost:3000/api/emps")
        .then((response) => response.json() )
        .then((data)=> {
            console.log("Emplyee Data Fetched Successfully...")
            setEmp(data)
        })
        .catch((e)=>{
            console.log("Error Fetching Details: ", e)
        })
  },[])

  console.log(emps)

  return (
    <>
      <div>
        <EmpForm addEmp={addEmp}/><br />
        <Stats emps={emps}/>
        <EmpSearch emps={emps} setEmp={setEmp}/>
      </div>
    </>
  )
}

export default App
