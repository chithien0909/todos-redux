import {connect} from "react-redux";
import {setVisibilityFilter} from '../actions/';
import Filter from '../components/Filter';

const mapStateToProps = (state,ownProps)=>({
    active: ownProps.filter === state.visibleFilter
});
const mapDispatchToProps = (dispatch, ownProps)=>({
    onClick : () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);