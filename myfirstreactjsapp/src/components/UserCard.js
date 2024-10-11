import React from 'react'
import Title from './Title'

function UserCard({name, email, id}) {
    return (
        <div>
            <Title name={name} />
            <p>{email}</p>
            <p>{id}</p>
        </div>
    )
}

export default UserCard