const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSent);

function handlerSent(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  } else {
    const result = {
      email: email.value,
      password: password.value,
    };
    console.log(result);
    form.reset();
  }
}
