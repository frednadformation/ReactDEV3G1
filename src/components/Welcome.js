import React, {Component} from "react";

class Welcome extends Component {
    render() {
        return (
        <div>
        <h1>Welcome {this.props.name} vous avez {this.props.age}</h1>
        <p>{this.props.children}</p>
        </div>)
    }
};

export default Welcome;