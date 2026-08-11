import { useEffect, useState } from "react"
import Modal from "./Modal";

export default function EmpForm({addEmp}){
    
    const [isOpen, setIsOpen] = useState(false);

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [dep, setDep] = useState("IT")
    const [salary, setSalary] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [active, setActive] = useState("Yes")

    function handleSubmit(event){
            event.preventDefault()
            const newEmp = {id: Number(id),name,dep,salary: Number(salary),email,date,active}
            addEmp(newEmp)
            setId("")
            setActive("Yes")
            setDate("")
            setEmail("")
            setName("")
            setSalary("")
            setDep("IT")
            setIsOpen(false)
    }

    return(
        <>
            <div className="header"> 
                <h1>Employee CRUD</h1>
                <button className="add-emp-btn" onClick = {()=>{setIsOpen(true)}}>
                    Add Employee
                </button>
            </div>
            <Modal isOpen = {isOpen} onClose = {()=>setIsOpen(false)} >
                <div className="formModal">
                    <form onSubmit={handleSubmit}>

                    <label>Employee ID: </label><br />
                    <input type="number" required onChange={e => setId(e.target.value)} value={id}/>
                    <br />
                    
                    <label>Employee Name: </label><br />
                    <input type="text" required onChange={e => setName(e.target.value)} value={name}/>
                    <br />
                    
                    <label>Department: </label><br />
                    <select required onChange={e => setDep(e.target.value)} value={dep}>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Sales">Sales</option>
                    </select>
                    <br />
                    
                    <label>Salary: </label><br />
                    <input type="number" required onChange={e => setSalary(e.target.value)} value={salary}/>
                    <br />
                    
                    <label>E-Mail: </label><br />
                    <input type="email" required onChange={e => setEmail(e.target.value)} value={email}/>
                    <br />
                    
                    <label>Joining Date: </label><br />
                    <input type="date" required onChange={e => setDate(e.target.value)} value={date}/>
                    <br />
                    <label>Active Status: </label>
                    <select onChange={e => setActive(e.target.value)} value={active}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br /><br />
                    <div className="form-submit-BTN">
                        <button type="submit">Submit</button>    
                    </div>
                    
                </form>
                </div>
            </Modal>
        </>
    )

}