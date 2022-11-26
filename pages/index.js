import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
  let [todo, addTodo] = useState(['todoList', 'dlsadk'])
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className=''>
        <h1 className='text-3xl font-bold'>TODO</h1>
        <div className='flex gap-2'>
          <input type="text" className='bg-gray-800 p-2 focus:bg-gray-900 rounded-full'/>
          <div className='bg-gray-800 hover:bg-gray-900 p-2 rounded-full cursor-pointer'>Add</div>
        </div>
        <div className='flex flex-col'>
          {todo.map((task) => {
            return(
              <p>{task}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}
