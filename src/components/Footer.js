import React from 'react';
import {VisibilityFilters} from '../actions/';
import Filter from '../containers/Filter';

const Footer = ()=>{
    return (
        <div className='footer'>
            <span>Show: </span>
            <Filter filter={VisibilityFilters.SHOW_ALL}>
                All
            </Filter>
            <Filter filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </Filter>
            <Filter filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </Filter>
        </div>
    )
};
export default Footer;