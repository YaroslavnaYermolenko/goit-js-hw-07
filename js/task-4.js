const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  const formFields = {
    email: email,
    password: password,
  };
  console.log(formFields);
  e.target.reset();
});
