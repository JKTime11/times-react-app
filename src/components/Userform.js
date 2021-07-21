import axios from "axios";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import Message from "./Message";

export default function Userform() {
    const [userform, setUserform]=useState({
        firstname: "Sandeep",
        age: 20
    });
    const [saveClicked, setSaveClicked]=useState(false);
    const [saved, setSaved]=useState(null);
    const [skills, setSkills]=useState([]);

    useEffect(()=>{
        const promise=axios.get(process.env.REACT_APP_SKILLS_URL);
        promise.then(response =>setSkills(response.data));
    }, []);

    const handleEvent= event => setUserform({...userform, [event.target.name]:event.target.value});

    const handleDropdownList = (event) => {
        console.log(event.target.textContent);
        setUserform({...userform, skill: event.target.textContent});
    }
    
    const save=() => {
        setSaveClicked(true);
        console.log(userform);
        const promise=axios.post(process.env.REACT_APP_SERVER_URL, userform);
        promise.then(response => {
            console.log(response);
            setSaved(true);
        }).catch(error => {
            console.log(error);
            setSaved(false);
        });
    }
    
    return (
        <div>
            <h3>Create User</h3>
            {saveClicked && <Message saved={saved}></Message>}
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
                    {
                        skills.map((skill) => {
                            return (
                                <Dropdown.Item>{skill}</Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
            <br></br>
            <button className="btn btn-primary" onClick={save}>Save</button>
            
        </div>
    );
}