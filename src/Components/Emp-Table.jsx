import { useState, useEffect } from "react"
import Modal from "./Modal"
import DeleteModal from "./delModal"

export default function EmpTable({emps, employees, setEmps}){
    
    const [isOpen,setIsOpen] = useState(false)
    const [isdelOpen , setisDelOpen] = useState(false)
    const [editEmp, setEditemp] = useState(null)
    const [deleteEmpId, setDeleteempId] = useState(null)

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [dep, setDep] = useState("IT");
    const [salary, setSalary] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [active, setActive] = useState("Yes");

     useEffect(() => {
        if (editEmp) {
            setId(editEmp.id);
            setName(editEmp.name);
            setDep(editEmp.dep);
            setSalary(editEmp.salary);
            setEmail(editEmp.email);
            setDate(editEmp.date);
            setActive(editEmp.active);
        }
    }, [editEmp]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmps(
            employees.map((emp) =>
                emp.id === editEmp.id
                    ? {
                        ...emp,
                        id: id,
                        name: name,
                        dep: dep,
                        salary: salary,
                        email: email,
                        date: date,
                        active: active
                    }
                    : emp
            )
        );

        setIsOpen(false);
        setEditEmp(null);
    }

    const handleEdit = (emp) =>{
        setIsOpen(true)
        setEditemp(emp)
    }

    const handleDelete = () => {
    setEmps(
        emps.filter((emp) => emp.id !== deleteEmpId)
    );
    setisDelOpen(false)
}

    return(
        <>
            <br /><br />
            <div className="listForm">
                <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Email</th>
                        <th>Joining Date</th>
                        <th>Actice Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map((e)=>{
                        return(
                            <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.dep}</td>
                            <td>{e.salary}</td>
                            <td>{e.email}</td>        
                            <td>{e.date}</td>
                            <td>{e.active}</td>
                            <td>
                                <div>
                                    <button onClick={()=>{handleEdit(e)}} className="table-edit">Edit</button>
                                    <button onClick={()=>{
                                        setisDelOpen(true)
                                        setDeleteempId(e.id)
                                    }} className="table-del">Delete</button>
                                </div>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
                </table>
                <Modal isOpen = {isOpen} onClose={()=>{setIsOpen(false)}}>
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
                <DeleteModal isdelOpen={isdelOpen} ondelClose={()=>{setisDelOpen(false)}}>
                    <h3>Confirm DELETE!!!</h3>
                    <div className="del-confirm-btn">
                        <button onClick={handleDelete}>Confirm</button>
                    </div>
                </DeleteModal>
            </div>
        </>
    )
}