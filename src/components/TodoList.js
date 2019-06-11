import React from 'react';
import AddTodo from './AddTodo';
import classNames from 'classnames';
import './TodoList.css';
import Footer from './Footer';
import iconDelete from '../images/delete.svg';
const TodoList = ({listTodo,toggleTodo, deleteTodo})=>{
    return (
        <div className={classNames('todo-list',{'have-task':listTodo.length>0})}>
            <AddTodo/>
            <ol className="list-tasks">
                {
                    (listTodo.length>0
                    &&
                    listTodo.map(item=>(
                        <li
                            key={item.id}
                            className={classNames('task-item', { active: item.completed })}
                            >
                            <span
                                onClick={()=>toggleTodo(item.id)}
                                className='text'>{item.text}
                            </span>
                            <img onClick={()=>deleteTodo(item.id)} src={iconDelete} alt="Delete"/>
                        </li>
                    )))
                    ||
                     <h2>Nothing here</h2>
                }
            </ol>
            <Footer/>
        </div>
    );
};
export default TodoList;