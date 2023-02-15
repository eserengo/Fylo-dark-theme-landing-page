import Button from './Button.js';

const Form = () => {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const target = document.getElementById('email');
    const RegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    target.parentElement.querySelectorAll(".error, .success").forEach(item => { item.remove() });
    if (target.value === "") {
      // target.parentElement.insertAdjacentHTML("beforeend", `<i class="fa fa-exclamation-circle error"></i>`);
      target.parentElement.insertAdjacentHTML("beforeend", `<span class="message error"><i class="fa fa-exclamation-circle error"></i> Email address cannot be empty.</span>`);
      target.classList.contains("valid") ? (target.classList.remove("valid"), target.classList.add("invalid")) : target.classList.add("invalid");
    } else if (!target.value.match(RegEx)) {
      // target.parentElement.insertAdjacentHTML("beforeend", `<i class="fa fa-exclamation-circle error"></i>`);
      target.parentElement.insertAdjacentHTML("beforeend", `<span class="message error"><i class="fa fa-exclamation-circle error"></i> Please enter a valid email adress.</span>`);
      target.classList.contains("valid") ? (target.classList.remove("valid"), target.classList.add("invalid")) : target.classList.add("invalid");
    } else {
      // target.parentElement.insertAdjacentHTML("beforeend", `<i class="fa fa-check-circle success"></i>`);
      target.parentElement.insertAdjacentHTML("beforeend", `<span class="message success"><i class="fa fa-check-circle success"></i> Accepted.</span>`);
      target.classList.contains("invalid") ? (target.classList.remove("invalid"), target.classList.add("valid")) : target.classList.add("valid");
    }
  }

  return (
    <form id='form' className='form-action flex rel' action='#' method='POST' noValidate onSubmit={HandleSubmit} >
      <label htmlFor='email' className='label' form='form'></label>
      <input type='email' id='email' className='input' form='form' autoComplete='off' placeholder='email@example.com' required />
      <Button type='submit' class='secondary button selectable' form='form' content='Get Started For Free' />
    </form>
  )
};

export default Form;