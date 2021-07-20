import axios from 'axios';
import {useState, useEffect} from 'react';

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
            {/* add class table */}
            <table className="table table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => 
                            (<tr>
                                <td>{user.firstname}</td>
                                <td>{user.age}</td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}