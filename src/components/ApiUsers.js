import React, { useState, useEffect } from 'react'
import UserCard from './UserCard'

const ApiUsers = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        console.log('useEffect')
        getPersonaje()
    }, [])

    const getPersonaje = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            setUsuarios(users)
            console.log(users)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container py-5'>
            <h1 className='text-center py-5'>ApiUsers</h1>
            <div className='row'>
                {
                    usuarios.map(usuario => 
                        <UserCard 
                            key={usuario.id}
                            name={usuario.name}
                            username={usuario.username}
                            email={usuario.email}
                            address={usuario.address}
                            phone={usuario.phone}
                            website={usuario.website}
                            company={usuario.company}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ApiUsers
