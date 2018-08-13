import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainPanel from './mainPanel/index';

class Counter extends Component {
    render() {
        const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;
        return (
            <div>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
                <button onClick={incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={() => incrementAsync()}>Increment async</button>
                <MainPanel />
            </div>
        )
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
};

export default Counter;
