import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: "",
      remainingChars: props.maxChars,
    };
  }

  handleChange = event => {
    const props = this.props
    const target = event.target
    const value = target.value
    this.setState({
      message: value,
      remainingChars: props.maxChars - value.length
    })
  }

  render() {
    const state = this.state
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={state.message} />
        <p>{state.remainingChars} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
