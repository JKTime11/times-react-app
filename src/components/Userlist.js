import axios from 'axios';
import {useState, useEffect} from 'react';

import Counter from "./Counter";

export default function Userlist() {
    const [users, setUsers]=useState([]);

    useEffect(() => {
        console.log('useEffect() called...');
        if(users.length!==0) {
            return;
        }
        const promise=axios.get(process.env.REACT_APP_SERVER_URL);
        promise.then(response=> setUsers(response.data));
    });

    const deleteUser = (id) => {
        const promise=axios.delete(process.env.REACT_APP_SERVER_URL+id);
        promise.then(response => {
            console.log(response);
            let remainingUsers = users;
            setUsers(remainingUsers.filter((user)=> user.id!==id));
        });
    }

    const sortByAge=()=>{
        let sortedUsers = users;
        sortedUsers.sort((user1, user2)=>user1.age-user2.age)
        setUsers([...sortedUsers]);
    };
    
    return (
        <div>
            <Counter count={users.length}></Counter>
            <button className="btn btn-primary" onClick={sortByAge}>SORT BY AGE</button>
            <br></br><br></br>
            {/* add class table */}
            <table className="table table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Age</th>
                        <th>Joining Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => 
                            (<tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.age}</td>
                                <td>{user.joiningDate}</td>
                                <td>
                                    <button className="btn btn-danger" 
                                        style={{width: '40%', height: '100%', margin: '0 30%'}} onClick={()=>{deleteUser(user.id)}}>
                                            Delete
                                    </button>
                                </td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}