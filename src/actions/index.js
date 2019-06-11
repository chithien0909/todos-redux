let nextId = 0;

export const addTodo = (text)=>(
    {
        id: nextId++,
        type:'ADD_TODO',
        text
    }
);
export const toggleTodo = (id)=>({
    id: id,
    type: 'TOGGLE_TODO'
});
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
export const deleteTodo = (id) => ({
    id:id,
    type: 'DELETE_TODO'
});

