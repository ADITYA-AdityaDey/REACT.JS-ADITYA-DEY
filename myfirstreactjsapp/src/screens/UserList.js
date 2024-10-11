import React from 'react'
import UserCard from '../components/UserCard';
import UserData from '../Data/UserData';

// Best Screen (using Components)
function UserList() {
    return (
        <div>
            {UserData.map(({ name, email, id }) => (
                <UserCard name={name} email={email} id={id}/>
            ))}
        </div>
    );
}

export default UserList