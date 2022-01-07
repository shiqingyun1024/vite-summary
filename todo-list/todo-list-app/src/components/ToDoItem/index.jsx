import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { STATUS } from '../../config/status'
// import { useState } from 'react'

const ToDoItem = () => {
    const { todoItem,setTodoItem } = useState({
        id:Math.random(),
        content:'',
        status:STATUS.IS_CREATE
    })
    const handleChange = (event)=>{
        console.log(event);
        console.log(event.target.value);
    }
    const handleSubmit = () =>{
        console.log('handleSubmit');
    }
    return (
        <div className="todo-item-input">
            <Input value={todoItem.content} onChange={handleChange}/>
            <Button size="large" type="primary" onClick={handleSubmit}>提交</Button>
        </div>

    )
}

export default ToDoItem