import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Userlist() {
    const [users, setUsers]=useState([]);

    useEffect(function() {
        console.log('useEffect() called...');
        if(users.length!==0) {
            return;
        }
        const promise=axios.get('http://localhost:4200/users');
        promise.then(function(response){
            setUsers(response.data);
            console.log(response.data);
        });
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
                    {users.map(function(user, index) {
                        return (<tr>
                            <td>{user.firstname}</td>
                            <td>{user.age}</td>
                        </tr>);
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}