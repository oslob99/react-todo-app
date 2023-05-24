import React from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './scss/TodoTemplate.scss';

const TodoTemplate = () => {

  // 서버에 할일 목록(json)을 요청해서 받아와야함
  const todos = [
    {
      id : 1,
      title : '산책',
      done : false
    },
    {
      id : 2,
      title : '신문',
      done : true
    },
    {
      id : 3,
      title : '아침밥',
      done : false
    },
    {
      id : 4,
      title : '공뷰',
      done : false
    }
  ];

  return (
    <div className='TodoTemplate'>
        <TodoHeader />
        <TodoMain todoList={todos} />
        <TodoInput />
    </div>
  )
}

export default TodoTemplate