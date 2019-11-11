import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "670426291950-g0kv7bk2sh0angkepr8teoc9va9qn1so.apps.googleusercontent.com",
                    scope: "email"
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button
                    className="ui green google button"
                    onClick={this.onSignOutClick}
                >
                    <i className="google icon" />
                    Sign Out
        </button>
            );
        }
        return (
            <button className="ui red google button" onClick={this.onSignInClick}>
                <i className="google icon" />
                Sign In
      </button>
        );
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
});

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);
