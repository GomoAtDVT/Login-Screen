const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const pressButton = document.querySelector('#button');
const cautionMessage = document.querySelector('#caution');


pressButton.addEventListener('click', () => {
  const name = inputName.value;
  const email = inputEmail.value;
  console.log(`Name: ${name}, Email: ${email}`);
  if (name === '' || email === '') {
    cautionMessage.classList.add('message');
    cautionMessage.innerHTML = 'PLEASE, fill in all the fields';
    setTimeout(() => {
       
      cautionMessage.innerHTML = '';
      cautionMessage.classList.remove('message')}, 3000);
  } else {

    function submitform() {
        const li = document.createElement('li');
        li.innerHTML = `Name: ${name}, Email: ${email}`;
        document.body.appendChild(li);
        li.classList.add('list');
    }
    submitform();
  }

  inputName.value = '';
  inputEmail.value = '';
});