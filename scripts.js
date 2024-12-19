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

  // Set ARIA attributes for accessibility
  question.setAttribute("role", "button");
  question.setAttribute("aria-expanded", "false");
  description.setAttribute("aria-hidden", "true");

  // Add an event listener to each question for mouse click
  question.addEventListener("click", () => {
    toggleFAQ(description, plusSign, minusSign, question);
  });

  // Add event listener for keydown events to support keyboard navigation
  question.addEventListener("keydown", (event) => {
    // If Enter or Space key is pressed, toggle the FAQ
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevent default action for spacebar (scrolling)
      toggleFAQ(description, plusSign, minusSign, question);
    }
  });
});

// Function to toggle the FAQ state (expand/collapse)
function toggleFAQ(description, plusSign, minusSign, question) {
  // If description is hidden, show it
  if (description.style.display === "none") {
    description.style.display = "block";
    description.classList.add("show");
    plusSign.style.display = "none";
    minusSign.style.display = "inline-block";
    question.setAttribute("aria-expanded", "true");
    description.setAttribute("aria-hidden", "false");
  } else {
    // If description is visible, hide it
    description.style.display = "none";
    plusSign.style.display = "inline-block";
    minusSign.style.display = "none";
    question.setAttribute("aria-expanded", "false");
    description.setAttribute("aria-hidden", "true");
  }
}
