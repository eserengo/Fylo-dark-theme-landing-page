class Button extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <button type={this.props.type} className={this.props.class}>{this.props.content}</button>;
  }
}

export default Button;