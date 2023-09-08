const faqItems = [...document.querySelectorAll(".faq-item")];
const icons = [...document.querySelectorAll(".action-btn img")];

// Second version
// const faqItemContents = [...document.querySelectorAll(".faq-content p")];

faqItems.forEach((element, index) => {
  element.addEventListener("click", () => {
    faqItems.forEach((otherElement, otherIndex) => {
      if (index != otherIndex) {
        otherElement.children[1].children[0].classList.remove("active");
        icons[otherIndex].classList.remove("rotate");

        // Second version
        // faqItemContents[otherIndex].classList.remove("active");
      }
    });
    element.children[1].children[0].classList.toggle("active");
    icons[index].classList.toggle("rotate");
    // Second version
    // faqItemContents[index].classList.toggle("active");
  });
});
