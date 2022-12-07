const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const lsSave = ev => {
  const userData = {
    email: form.email.value,
    message: form.message.value,
  };
  const dataJSON = JSON.stringify(userData);
  localStorage.setItem(LOCALSTORAGE_KEY, dataJSON);
};

form.addEventListener('input', throttle(lsSave, 500));

form.addEventListener('submit', ev => {
  ev.preventDefault();

  const data = localStorage.getItem(LOCALSTORAGE_KEY);

  if (data === null) {
    return alert('Uzupełnij wszystkie pola formularza');
  }
  const dataJSON = JSON.parse(data);
  console.log('email: ' + dataJSON.email);
  console.log('message: ' + dataJSON.message);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  ev.currentTarget.reset();
});
