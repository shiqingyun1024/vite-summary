import React from 'react'
import { List } from 'antd'

const ToDoContainer = (props) => {
    const {todos=[]} = props
    return (
        <div className="todo-container">
            <List
                dataSource={todos}
                renderItem={
                    todo=>(
                        <List.Item>
                            {todo.content}
                        </List.Item>
                    )
                }
            />
        </div>
    )
}
export default ToDoContainer