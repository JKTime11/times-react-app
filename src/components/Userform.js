import { useState } from "react";

export default function Userform() {
    const [userform, setUserform]=useState({
        firstname: "Sandeep",
        age: 20
    });
    const handleEvent=function(event) {
        setUserform({...userform, firstname:event.target.value});
    }
    const handleEventForAge=function(event) {
        setUserform({...userform, age:event.target.value});
    }
    const save=function(event) {
        console.log(userform);
    }
    return (
        <div>
            <h3>Create User</h3>
            <input type="text" value={userform.firstname} onChange={handleEvent}></input>
            <input type="number" value={userform.age} onChange={handleEventForAge}></input>
            <button onClick={save}>Save</button>
        </div>
    )
}