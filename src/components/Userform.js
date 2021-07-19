import axios from "axios";
import { useState } from "react";

export default function Userform() {
    const [userform, setUserform]=useState({
        firstname: "Sandeep",
        age: 20
    });
    const handleEvent=function(event) {
        setUserform({...userform, [event.target.name]:event.target.value});
    }
    const save=function(event) {
        console.log(userform);
        const promise=axios.post("http://localhost:4200/users", userform);
        promise.then(function(response){
            console.log(response);
        });
    }
    return (
        <div>
            <h3>Create User</h3>
            <input type="text" name="firstname" value={userform.firstname} onChange={handleEvent}></input>
            <input type="number" name="age" value={userform.age} onChange={handleEvent}></input>
            <button onClick={save}>Save</button>
        </div>
    );
}