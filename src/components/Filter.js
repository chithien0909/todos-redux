import React from 'react';
const Filter = ({active,onClick,children})=>{
    return (
        <button
            disabled={active}
            onClick={onClick}>
            {
                children
            }
        </button>
    )
};
export default Filter;