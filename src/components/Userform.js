import axios from "axios";
import { useState } from "react";

export default function Userform() {
    const [userform, setUserform]=useState({
        firstname: "Sandeep",
        age: 20
    });
    const handleEvent= event => setUserform({...userform, [event.target.name]:event.target.value});

    const handleDropdown = (event) => {
        event.target.parentNode.childNodes[1].style.display="block";
    }

    const handleDropdownList = (event) => {
        console.log(event.target);
        event.target.parentNode.style.display="none";
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
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" onClick={handleDropdown}>Select Skill
                <span className="caret"></span></button>
                <ul className="dropdown-menu" onClick={handleDropdownList}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <button className="btn btn-primary" onClick={save}>Save</button>
        </div>
    );
}