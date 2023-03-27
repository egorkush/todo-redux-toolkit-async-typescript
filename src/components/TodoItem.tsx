import React from 'react'
import { useAppDispatch } from '../hook'
import { toggleStatus, deleteTodo } from '../store/todoSlice'

interface TodoItemProps {
  id: string
  text: string
  completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch()

  return (
    <li>
      <div className='wrap'>
        <div>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{text}</span>
        </div>
      <span className='remove' onClick={() => dispatch(deleteTodo(id))}>&times;</span>
      </div>
    </li>
  )
}

export default TodoItem