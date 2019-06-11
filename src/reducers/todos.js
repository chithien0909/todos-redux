import React from 'react';
let initialState = [];
const getTodosDefault = ()=>{
    if(!localStorage.todos){
        localStorage.setItem("todos", JSON.stringify(initialState));
    }else{
        initialState = JSON.parse(localStorage.getItem('todos'));
    }
    return initialState;
};
function todos(state=getTodosDefault(),action){
    console.log("Action",action);
    let data = [];
    switch (action.type) {
        case 'ADD_TODO':
            data = [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
            localStorage.setItem('todos',JSON.stringify(data));
            return data;
        case 'DELETE_TODO':
            data = state.filter(item=>(item.id!==action.id));
            localStorage.setItem('todos',JSON.stringify(data));
            return data;
        case 'TOGGLE_TODO':
            data = state.map(item=>(
                item.id===action.id ? {...item,completed: !item.completed}:item
            ));
            localStorage.setItem('todos',JSON.stringify(data));
            return data;
        default:
            return state;
    }
}
export default todos;
