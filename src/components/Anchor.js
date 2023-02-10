class Anchor extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <a href={this.props.href} className={this.props.class} target={this.props.target}>{this.props.content}</a>;
  }
}

export default Anchor;