import React from 'react'
import { List } from 'antd'
import { CheckCircleTwoTone,CloseCircleTwoTone } from '@ant-design/icons'

const ToDoContainer = (props) => {
    const {todos=[]} = props
    return (
        <div className="todo-container">
            <List
                dataSource={todos}
                renderItem={
                    todo=>(
                        <List.Item className="todo-container-list">
                            {todo.content}
                            <div className="todo-item-operate">
                                <CheckCircleTwoTone/>
                                <CloseCircleTwoTone/>
                            </div>
                        </List.Item>
                    )
                }
            />
        </div>
    )
}
export default ToDoContainer