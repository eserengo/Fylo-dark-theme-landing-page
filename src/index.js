import Heading from "./components/Heading.js";
import Button from "./components/Button.js";
import Para from "./components/Para.js";
import Image from "./components/Image.js";
import { HeaderNav, ContactNav, LinksNav, SocialNav } from "./components/Navs.js";
import Attribution from "./components/Attribution.js";
import Anchor from "./components/Anchor.js";
import Form from "./components/Form.js";

(function () {
  
  const DisplayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelectorAll('.flex').forEach(item => {
        item.classList.remove('flex-row');
        item.classList.add('flex-col');
      })
      document.querySelector('.grid-container').classList.add('flex-col');
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelectorAll('.flex').forEach(item => {
        item.classList.remove('flex-col');
        item.classList.add('flex-row');
      })
      document.querySelector('.grid-container').classList.remove('flex-col');
    }
  }

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  const Header = () => (
    <header className='header'>
      <Image class='logo left' src='./src/images/logo.svg' alt='logo' />
      <HeaderNav />
    </header>
  );

  const Main = () => (
    <main className='main'>
      <section className='intro flex-col center'>
        <Image class='image' src='./src/images/illustration-intro.png' alt='illustration intro' />
        <Heading query='h1' class='primary title' content='All your files in one secure location, accessible anywhere.' />
        <Para class='para' content='Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.' />
        <Button type='button' class='primary button selectable' content='Get Started' />
      </section>
      <section className='grid-container'>
        <div className='flex-col center'>
          <Image class='icon' src='./src/images/icon-access-anywhere.svg' alt='access anywhere icon' />
          <Heading class='sub title' content='Access your files, anywhere' />
          <Para class='para' content='The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.' />
        </div>
        <div className='flex-col center'>
          <Image class='icon' src='./src/images/icon-security.svg' alt='security icon' />
          <Heading class='sub title' content='Security you can trust' />
          <Para class='para' content='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.' />
        </div>
        <div className='flex-col center'>
          <Image class='icon' src='./src/images/icon-collaboration.svg' alt='collaboration icon' />
          <Heading class='sub title' content='Real-time collaboration' />
          <Para class='para' content='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.' />
        </div>
        <div className='flex-col center'>
          <Image class='icon' src='./src/images/icon-any-file.svg' alt='any file icon' />
          <Heading class='sub title' content='Store any type of file' />
          <Para class='para' content='Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.' />
        </div>
      </section>
      <section className='flex center'>
        <Image class='image' src='./src/images/illustration-stay-productive.png' alt='illustration stay productive' />
        <div className='flex-col'>
          <Heading query='h2' class='secondary title' content='Stay productive, wherever you are' />
          <Para class='para' content='Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.' />
          <Para class='para' content='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.' />
          <span>
            <Anchor href='#' class='link' target='_blank' content='See how Fylo works' />
            <Image class='arrow icon' src='./src/images/icon-arrow.svg' alt='arrow icon' />
          </span>
        </div>
      </section>
      <section className='flex'>
        <div className='flex-col'>
          <Para class='sub para' content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' />
          <div className='flex-row'>
            <Image class='avatar' src='./src/images/profile-1.jpg' alt='avatar' />
            <span className='name'>
              <em className='em'>Satish Patel</em>
              <br></br>
              Founder & CEO, Huddle
            </span>
          </div>
        </div>
        <div className='flex-col'>
          <Para class='sub para' content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' />
          <div className='flex-row'>
            <Image class='avatar' src='./src/images/profile-2.jpg' alt='avatar' />
            <span className='name'>
              <em className='em'>Bruce McKenzie</em>
              <br></br>
              Founder & CEO, Huddle
            </span>
          </div>
        </div>
        <div className='flex-col'>
          <Para class='sub para' content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' />
          <div className='flex-row'>
            <Image class='avatar' src='./src/images/profile-3.jpg' alt='avatar' />
            <span className='name'>
              <em className='em'>Iva Boyd</em>
              <br></br>
              Founder & CEO, Huddle
            </span>
          </div>
        </div>
      </section>
      <section className='flex-col center'>
        <Heading query='h2' class='sub title' content='Get early access today' />
        <Para className='para' content='It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.' />
        <Form />
      </section>
    </main>
  )

  const Footer = () => (
    <footer className='footer flex'>
      <Image class='logo left' src='./src/images/logo.svg' alt='logo' />
      <ContactNav />
      <LinksNav />
      <SocialNav />
    </footer>
  )

  const App = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);
    return (
      <>
        <Header />
        <Main />
        <Footer />
        <Attribution />
      </>
    )
  }

  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root' />`);
  ReactDOM.createRoot(document.getElementById('root')).render(<App tab='home' />);
})();