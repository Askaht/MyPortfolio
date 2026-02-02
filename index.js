document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector("textarea").value;
  const contactData = {
    name,
    email,
    message,
    date: new Date().toLocaleString(),
  };
  let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
  messages.push(contactData);
  localStorage.setItem("contactMessages", JSON.stringify(messages));
  alert("Thanks! Your message has been saved.");
  this.reset();
});
document.querySelectorAll(".circle").forEach((circle) => {
  let percent = circle.getAttribute("data-percent");
  circle.style.background = `conic-gradient(#38bdf8 0% ${percent}%, #111827 ${percent}% 100%)`;
});
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
    });
  }
}
