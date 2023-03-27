import React from 'react'
import { useAppSelector } from '../hook'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.title}
          completed={todo.completed}
          id={todo.id}
        />
      ))}
    </ul>
  )
}

export default TodoList