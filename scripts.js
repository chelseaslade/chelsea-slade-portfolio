//Chelsea Slade (Mayne)
//Software Development Portfolio
//August 5/2024 - August 12, 2024

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let contactName = document.getElementById("inputName");
  let contactEmail = document.getElementById("inputEmail");
  let contactMessage = document.getElementById("inputMessage");

  if (
    contactName.value == "" ||
    contactEmail.value == "" ||
    contactMessage.value == ""
  ) {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
  }
});
