import React from 'react';
import {toggleTodo, VisibilityFilters, deleteTodo} from '../actions';
import {connect} from "react-redux";
import TodoList from '../components/TodoList';
import visibleFilter from "../reducers/visibleFilter";
const getVisibleTodos  = (todos,filter)=>{
    console.log(filter);
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(item=>item.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(item=>!item.completed);
        default:
            throw new Error('Unknown filter '+filter);
    }
};

const mapStateToProps = state => ({
    listTodo: getVisibleTodos(state.todos,state.visibleFilter)
});
const mapDispatchToProps  = (dispatch)=>({
    toggleTodo : (id) => {
        dispatch(toggleTodo(id));
    },
    deleteTodo : (id) =>{
        dispatch(deleteTodo(id));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);