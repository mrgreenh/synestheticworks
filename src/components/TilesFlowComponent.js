import React from 'react';
import renderFlow from './renderFlow.js';
import "./tilesFlow.css";

class TilesFlowComponent extends React.PureComponent {
    componentDidMount() {
        renderFlow(this.props.readingTracker);
    }

    render() {
        return (<div id="flowRoot">
            <div id="tilesflowContainer"></div>
            <div id="tilesflowContainer2"></div>
            <div id="flowOverlay"/>
        </div>);
    }
}

export default TilesFlowComponent;