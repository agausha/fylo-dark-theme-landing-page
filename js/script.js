const form = document.querySelector('.sign-up__form');
const feedback = document.querySelector('.feedback');
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

form.addEventListener('submit', e => {
  e.preventDefault();

  // Validation
  const email = form.email.value;

  if (emailPattern.test(email)) {
    feedback.textContent = 'Success';
  } else {
    feedback.textContent = 'Please enter a valid email address.';
  }
});