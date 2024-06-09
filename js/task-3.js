function greetingFoo() {
  const textInput = document.querySelector("#name-input");
  const output = document.querySelector("#name-output");

  textInput.addEventListener("input", (evt) => {
    const Value = evt.currentTarget.value;
    output.textContent = Value === "" ? "Anonymous" : Value;
  });
}
greetingFoo();
