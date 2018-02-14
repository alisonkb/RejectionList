import React from "react";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(type) {
    return e => {
      e.preventDefault();
      this.props.submit(this.state);
    };
  }

  handleUpdate(type) {
    return e => {
      e.preventDefault();
      this.setState({ type: e.target.value });
    };
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit(this.props.type)}>
          <input onChange={this.handleUpdate("username")} />
          <input onChange={this.handleUpdate("password")} />
          <button>{this.props.type}</button>
        </form>
      </section>
    );
  }
}
