import { useState } from "react";

export default function Userform() {
    const [userform, setUserform]=useState({firstname: "Sandeep"});
    return (
        <div>
            <h3>Create User</h3>
            <input type="text" value={userform.firstname}></input>
        </div>
    )
}