import { useState } from "react";

export default function Userform() {
    const [userform, setUserform]=useState({firstname: "Sandeep"});
    const handleEvent=function(event) {
        setUserform({...userform, firstname:event.target.value});
    }
    return (
        <div>
            <h3>Create User</h3>
            <input type="text" value={userform.firstname} onChange={handleEvent}></input>
        </div>
    )
}