import axios from "axios";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function Userform() {
    const [userform, setUserform]=useState({
        firstname: "Sandeep",
        age: 20
    });
    const handleEvent= event => setUserform({...userform, [event.target.name]:event.target.value});

    const handleDropdownList = (event) => {
        console.log(event.target.textContent);
        setUserform({...userform, skill: event.target.textContent});
    }
    
    const save=() => {
        console.log(userform);
        const promise=axios.post("http://localhost:4200/users", userform);
        promise.then(response => console.log(response));
    }
    return (
        <div>
            <h3>Create User</h3>
            <div className="form-group">
                <label htmlFor="firstname">First Name : </label>
                <input className="form-control" type="text" name="firstname" 
                    value={userform.firstname} onChange={handleEvent}></input>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age : </label>
                <input className="form-control" type="number" name="age" value={userform.age} 
                    onChange={handleEvent}></input>
            </div>
            <div className="form-group">
                <label htmlFor="">Joining Date : </label>
                <input className="form-control" type="date" name="joiningDate" value={userform.joiningDate} 
                    onChange={handleEvent}></input>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Skill
                </Dropdown.Toggle>
                <Dropdown.Menu onClick={handleDropdownList}>
                    <Dropdown.Item>HTML</Dropdown.Item>
                    <Dropdown.Item>CSS</Dropdown.Item>
                    <Dropdown.Item>JavaScript</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <button className="btn btn-primary" onClick={save}>Save</button>
        </div>
    );
}