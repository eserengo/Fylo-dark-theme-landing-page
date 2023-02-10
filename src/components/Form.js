import Button from "./Button.js";

const Form = () => (
  <form id='form' className='form-action flex' action='#' method='POST' noValidate>
    <label htmlFor='email' className='label' form='form'></label>
    <input type='email' id='email' className='input' form='form' autoComplete='off' placeholder='email@example.com' required />
    <Button type='submit' class='primary button selectable' form='form' content='Get Started For Free' />
  </form>
);

export default Form;