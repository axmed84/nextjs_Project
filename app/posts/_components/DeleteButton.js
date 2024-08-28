'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteButton = ({id}) => {

    const router = useRouter()

    const handleDelete = async () => {

        if(!confirm('Are you sure you want to delete"?"')) return

       const response = await fetch(`http://localhost:3000/api/post/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok){
            console.log("successful response");
            router.push('/posts')
            router.refresh()
        }else{
            console.error("Error");
        }
    }

  return (
    <button onClick={handleDelete} className='text-rose-600 hover:text-rose-900'>Delete</button>
  )
}

export default DeleteButton