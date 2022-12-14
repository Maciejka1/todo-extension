import { useState } from 'react'
export default function Home() {
  const [todo, addTodo] = useState([])
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className=''>
        <h1 className='text-3xl font-bold'>TODO</h1>
        <div className='flex gap-2'>
          <input type="text" className='bg-gray-800 p-2 focus:bg-gray-900 rounded-full'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div
          className='bg-gray-800 hover:bg-gray-900 p-2 rounded-full cursor-pointer'
          onClick={() => {
            if (input){
              addTodo(prev => {
                return(
                  [{id: todo.length, value: input}, ...prev]
                )
              })
              setError('') 
              setInput('')
            } else {
              setError('You cannot add empty entry!')
            }

          }}
          >
            Add
          </div>
        </div>
        <p className='text-red-600'>{error}</p>
        <div className='flex flex-col'>
          {todo.map((task) => {
            return(
              <div className='flex justify-between'>
                <p key={task.id}>{task.value}</p>
                <div className='flex gap-2'>
                  <div className='text-green-600'>com</div>
                  <div className='text-red-600'>del</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
