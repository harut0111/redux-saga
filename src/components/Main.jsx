import React from 'react';
import { connect } from "react-redux"
import * as CONST from '../redux/constants/index'

const Main = (props) => {
    return (
        <div className='mainComp'>
            <h1>Redux Saga</h1>
            <button onClick={props.increment}>Increment</button>
            {' '}
            <button onClick={props.decrement}>Decrement</button>
            <hr />
            <button onClick={props.incrementAsync} >Increment after 2 second</button>
            {' '}
            <button onClick={props.decrementAsync}>Decrement after 2 second</button>
            <p><i>this saga will take every action</i></p>
            <h1>Count: {props.state}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            const action = {type: CONST.INCREMENT};
            dispatch(action);
        },
        decrement: () => {
            const action = {type: CONST.DECREMENT};
            dispatch(action);
        },
        incrementAsync: () => {
            const action = {type: CONST.INCREMENT_ASYNC};
            dispatch(action);
        },
        decrementAsync: () => {
            const action =  {type: CONST.DECREMENT_ASYNC};
            dispatch(action);
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Main);