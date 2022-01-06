import React from 'react'
import { Input, Button } from 'antd'

const ToDoItem = () => {
    const handleSubmit = () =>{
        console.log('handleSubmit');
    }
    return (
        <div className="todo-item-input">
            <Input />
            <Button size="large" type="primary" onClick={handleSubmit}>提交</Button>
        </div>

    )
}

export default ToDoItem