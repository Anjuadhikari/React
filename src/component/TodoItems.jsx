import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import deleteIcon from '../assets/delete.png'

const TodoItems = () => {
  return (
    <div className='flex items-center gap-2 rounded-lg my-3'>
        <div>
            <img src={tick} alt="Tick Icon" />
            <p>Task 1</p>

        </div>

    </div>
  )
}
export default TodoItems


