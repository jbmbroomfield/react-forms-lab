import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = event => {
    const target = event.target
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const state = this.state
    const props = this.props
    if (!state.username || !state.password) {
      return
    }
    props.handleLogin()
  }

  render() {
    const state = this.state
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
