class Para extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    if (this.props.query == 'strong') return <strong className={this.props.class}>{this.props.content}</strong>;
    else return <p className={this.props.class}>{this.props.content}</p>;
  }
}

export default Para;