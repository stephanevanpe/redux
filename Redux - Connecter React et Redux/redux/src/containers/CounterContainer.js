import React from 'react';
import { connect } from 'react-redux';

//1) définir les actions à dispatcher (avec le mapDispatchToProps) pour modifier le STATE
const mapDispatchToProps = dispatch => ({
    add1: () => dispatch({ type: 'ADD1' }),
    add10: () => dispatch({ type: 'ADD10' }),
    remove1: () => dispatch({ type: 'REMOVE1' }),
    remove10: () => dispatch({ type: 'REMOVE10' }),
    reset: () => dispatch({ type: 'RESET' })
});

//2) définir le state à afficer (avec le mapStateToProps)
const mapStateToProps = state => ({
    counter: state
});

//3) créer le composant qui va afficher les 5 boutons et que au click appelera l'action correspondante
const CounterContainer = ({
    counter,
    add1,
    add10,
    remove1,
    remove10,
    reset
}) => (
        <div>
            <p>{counter}</p>
            <button onClick={add1}>+1</button>
            <button onClick={add10}>+10</button>
            <button onClick={remove1}>-1</button>
            <button onClick={remove10}>-10</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

//4) Faire l'export correspondant
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);