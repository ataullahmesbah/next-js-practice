'use client';

import { useEffect, useState } from "react";



const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    return (
        <div>
            <h1>Total users: {users.length}</h1>

            {
                users.map((user) => 

                    <div
                    key={user.id}
                        className="card mx-auto w-[70%] shadow-xl bg-blue-100 my-5 p-2 gap-10 px-5 space-y-10">
                        <div className="card-body space-y-4">
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.email}</p>
                            <p>{user.username}</p>



                        </div>


                    </div>


                )
            }
        </div>
    );
};

export default Users;