import React, { Component } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux'

class AlertInfo extends Component {
    render() {
        if(this.props.alertShow === false) return null;
        return (
            <AlertContainer>
                <Alert type="info">Thông báo</Alert>
            </AlertContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
