import React from 'react'
import { List } from 'antd'
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import { STATUS } from '../../config/status'

const ToDoContainer = (props) => {
    const { todos = [], onOperate } = props
    const handleOperate = (operate, item) => {
        switch (operate) {
            case 'is-delete':
                onOperate && onOperate({
                    ...item,
                    status:STATUS.IS_DELETE
                })
                break;
            case 'is-done':
                onOperate && onOperate({
                    ...item,
                    status:STATUS.IS_DONE
                })
                break;
            default:
                break;
        }
    }

    const showTodos = todos.filter(todo=>{
        return todo.status != STATUS.IS_DELETE;
    })
    return (
        <div className="todo-container">
            <List
                dataSource={showTodos}
                renderItem={
                    todo => (
                        <List.Item className={todo.status === STATUS.IS_DONE?"todo-container-list-done":"todo-container-list"}>
                            {todo.content}
                            <div className="todo-item-operate">
                                <CheckCircleTwoTone onClick={() => handleOperate("is-done", todo)} />
                                <CloseCircleTwoTone onClick={() => handleOperate("is-delete", todo)} />
                            </div>
                        </List.Item>
                    )
                }
            />
        </div>
    )
}
export default ToDoContainer