import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    light: state
});
const LightComponent = ({ light, dispatch }) => (
    <div>
        <p>{light}</p>
        <button
            onClick={() => dispatch({ type: 'SWITCH' })}
        >
            switch
    </button>
    </div>
);

export default connect(
    mapStateToProps
)(LightComponent);