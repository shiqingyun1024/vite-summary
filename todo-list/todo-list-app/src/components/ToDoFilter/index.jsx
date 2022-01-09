import React from "react";
import { Radio } from 'antd'

const ToDoFilter = (props) => {
    return (
       <div className="todo-filter">
           <Radio.Group>
               <Radio.Button>全部</Radio.Button>
               <Radio.Button>未完成</Radio.Button>
               <Radio.Button>已完成</Radio.Button>
           </Radio.Group>
       </div>
    )
}
export default ToDoFilter