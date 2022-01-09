import { useState } from 'react'
import ToDoItem from './components/ToDoItem'
import ToDoFilter from './components/ToDoFilter'
import ToDoContainer from './components/ToDoContainer'
import { STATUS } from './config/status'

function App() {
  const [todos, setTodos] = useState([])
  // 全部 0,1  已完成 1 未完成 0
  const [filterStatus, setFilterStatus] = useState(`${STATUS.IS_CREATE},${STATUS.IS_DONE}`);
  const handleSubmit = (todoItem) => {
    console.log('App', todoItem);
    setTodos([
      ...todos,
      todoItem
    ])
  }
  const handleOperate = (todoItem) => {
    console.log('handleOperate');
    const newTodos = todos.filter(todo => todo.id !== todoItem.id)
    newTodos.push(todoItem)
    setTodos(newTodos)

  }
  const handleStatusChange = (status) => {
    console.log(status);
    setFilterStatus(status)

  }
  return (
    <div className="todo-app">
      <h2 className="todo-title">待办清单</h2>
      <ToDoItem onSubmit={handleSubmit} />
      <ToDoFilter filterStatus={filterStatus} onFilterStatus={handleStatusChange} />
      <ToDoContainer filterStatus={filterStatus} todos={todos} onOperate={handleOperate} />
    </div>
  )
}

export default App
