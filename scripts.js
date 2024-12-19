const plusSigns = document.querySelectorAll(".plusSign");
const minusSigns = document.querySelectorAll(".minusSign");
const descriptions = document.querySelectorAll(".description");
const questions = document.querySelectorAll(".question");

// First initally hide all of the minus signs and descriptions
plusSigns.forEach((plusSign) => {
  plusSign.style.display = "inline-block";
});

minusSigns.forEach((minusSign) => {
  minusSign.style.display = "none";
});

descriptions.forEach((description) => {
  description.style.display = "none";
});

// Loop through each question
questions.forEach((question, index) => {
  // Initialize the index of all of these faq
  const plusSign = plusSigns[index];
  const minusSign = minusSigns[index];
  const description = descriptions[index];

  // Add an event listener to each question
  question.addEventListener("click", () => {
    if (description.style.display === "none") {
      description.style.display = "block";
      description.classList.add("show");
      plusSign.style.display = "none";
      minusSign.style.display = "inline-block";
    } else {
      description.style.display = "none";
      plusSign.style.display = "inline-block";
      minusSign.style.display = "none";
    }
  });
});
