import React from 'react'
import { List } from 'antd'
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'

const ToDoContainer = (props) => {
    const { todos = [] } = props
    const handleOperate = (operate, item) => {
        switch (operate) {
            case 'is-delete':
                break;
            case 'is-done':
                break;
            default:
                break;
        }
    }
    return (
        <div className="todo-container">
            <List
                dataSource={todos}
                renderItem={
                    todo => (
                        <List.Item className="todo-container-list">
                            {todo.content}
                            <div className="todo-item-operate">
                                <CheckCircleTwoTone onClick={() => handleOperate("is-delete", todo)} />
                                <CloseCircleTwoTone onClick={() => handleOperate("is-done", todo)} />
                            </div>
                        </List.Item>
                    )
                }
            />
        </div>
    )
}
export default ToDoContainer