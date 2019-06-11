import React from 'react';
import { addTodo } from '../actions';
import {connect} from "react-redux";

const AddTodo = ({dispatch})=>{
    console.log("Dispatch here",dispatch);
    let input;
    return (
        <div>
            <form className="form-add-todo" onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value));
                input.value = ''
            }}>
                <input placeholder="Writing some you need to be done" ref={node => input = node} />
                <button  type="submit">
                    Add Todo
                </button>
            </form>
        </div>

    )
};

export default connect()(AddTodo);