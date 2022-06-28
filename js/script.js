const form = document.querySelector('sign-up__form');
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


form.addEventListener('submit', e => {
  e.preventDefault();
})