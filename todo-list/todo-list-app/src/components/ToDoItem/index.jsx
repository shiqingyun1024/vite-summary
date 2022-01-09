import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { STATUS } from '../../config/status'
// import { useState } from 'react'

const ToDoItem = (props) => {
    const { onSubmit } = props;
    const [todoItem,setTodoItem] = useState({})
    const handleChange = (event)=>{
        setTodoItem({
            id:Math.random(),
            status:STATUS.IS_CREATE,
            content:event.target.value
        })
    }
    const handleSubmit = () =>{
        console.log('handleSubmit');
        onSubmit && onSubmit(todoItem)
    }
    return (
        <div className="todo-item-input">
            <Input placeholder="请输入待办事项" value={todoItem.content} onPressEnter={handleSubmit} onChange={handleChange} />
            <Button size="large" type="primary" onClick={handleSubmit}>提交</Button>
        </div>

    )
}

export default ToDoItem