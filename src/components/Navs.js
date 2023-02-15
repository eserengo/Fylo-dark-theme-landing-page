import Para from "./Para.js";
import Image from "./Image.js";

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: 'off' };
    this.data = ['Features', 'Team', 'Sign In'];
    this.list = ({ props }) => {
      return props.map((item, index) => <li key={index}>{item}</li>)
    }
  }
  render() {
    if (this.state.modal == 'off') return (
      <>
        <Image class='logo left' src='./src/images/logo.svg' alt='logo' />
        <i className='fa fa-bars right mobile selectable' alt='hamburger icon' onClick={() => { this.setState({ modal: 'on' }) }} />
        <nav className='selectable right desktop'>
          <ul className='flex-row'>
            <this.list props={this.data} />
          </ul>
        </nav>
      </>
    );
    else return (
      <>
        <Image class='logo left' src='./src/images/logo.svg' alt='logo' />
        <i className='fa fa-times right mobile selectable' alt='close icon' onClick={() => { this.setState({ modal: 'off' }) }} />
        <nav className='selectable modal mobile'>
          <ul className='flex-col'>
            <this.list props={this.data} />
          </ul>
        </nav>
      </>
    );
  }
};

const ContactNav = () => (
  <div className='flex'>
    <div className='flex-row'>
      <Image class='icon' src='./src/images/icon-location.svg' alt='location icon' />
      <Para class='text' content='Mendoza, Argentina' />
    </div>
    <div className='flex-col'>
      <div className='flex-row'>
        <Image class='icon' src='./src/images/icon-phone.svg' alt='phone icon' />
        <Para class='text' content='+1-543-123-4567' />
      </div>
      <div className='flex-row'>
        <Image class='icon' src='./src/images/icon-email.svg' alt='email icon' />
        <Para class='text' content='example@fylo.com' />
      </div>
    </div>
  </div>
);

const LinksNav = () => {
  const data1 = ['About Us', 'Jobs', 'Press', 'Blog'];
  const data2 = ['Contact Us', 'Terms', 'Privacy'];
  const List = ({ props }) => {
    return props.map((item, index) => <li key={index}>{item}</li>)
  }
  return (
    <nav className='selectable'>
      <ul className='links flex'>
        <div className='flex-col'>
          <List props={data1} />
        </div>
        <div className='flex-col'>
          <List props={data2} />
        </div>
      </ul>
    </nav>
  )
};

const SocialNav = () => {
  const data = ['fa fa-facebook-official', 'fa fa-twitter', 'fa fa-instagram'];
  const List = ({ props }) => {
    return props.map((item, index) => <li key={index}><i className={item}></i></li>)
  }
  return (
    <nav className='selectable'>
      <ul className='social flex-row center'>
        <List props={data} />
      </ul>
    </nav>
  )
};

export { HeaderNav, ContactNav, LinksNav, SocialNav };