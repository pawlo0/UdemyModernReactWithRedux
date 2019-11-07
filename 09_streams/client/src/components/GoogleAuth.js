import React, { Component } from 'react'

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            windows.gapi.client.init({
                clientId: 670426291950 - qprijpqhhvvp9n2ppcsbne7cldoip4m2.apps.googleusercontent.com,
                scope: 'email'
            })
        })
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth