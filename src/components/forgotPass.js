import React, { Component } from "react";

export default class ForgotPass extends Component {
    render() {
        return (
            <form>
                <h3>
                    Reset your password
                </h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                 <a href="confirm-pass">Confirm</a>
            </form>
        )
    }
}