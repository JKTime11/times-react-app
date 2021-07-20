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
        const promise=axios.get('http://localhost:4200/users');
        promise.then(response=> setUsers(response.data));
    });

    return (
        <div>
            <Counter count={users.length}></Counter>
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
                        users.map((user, index) => 
                            (<tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.age}</td>
                                <td>{user.joiningDate}</td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}