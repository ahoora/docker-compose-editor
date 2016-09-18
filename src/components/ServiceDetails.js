import React, {PropTypes} from "react";
import {connect} from "react-redux";
import ImageInputField from "./ImageInputField"
import RestartPolicyInputField from "./RestartPolicyInputField"

class ServiceDetails extends React.Component {
    render() {
        const service = this.getService();
        return (
            <div>
                <h1>{this.props.params.id}</h1>
                <ImageInputField image={service.image}/>
                <RestartPolicyInputField value={service.restart}/>
            </div>
        )
    }

    getService() {
        return this.props.services[this.props.params.id] || {};
    }
}

function mapStateToProps(state) {
    return {
        services: state.app.services
    }
}
export default connect(mapStateToProps)(ServiceDetails)