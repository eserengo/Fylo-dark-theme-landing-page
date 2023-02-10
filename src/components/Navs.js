import Para from "./Para.js";
import Image from "./Image.js";

const HeaderNav = () => {
  const data = ['Features', 'Team', 'Sign In'];
  const List = ({ props }) => {
    return props.map(item => <li key={item}>{item}</li>)
  };
  return (
    <nav className='selectable right'>
      <ul className='flex-row'>
        <List props={data} />
      </ul>
    </nav>
  )
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
    return props.map((item) => <li key={item}>{item}</li>)
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
    return props.map((item) => <li key={item}><i className={item}></i></li>)
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