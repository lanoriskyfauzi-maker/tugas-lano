
// 1. DARK/LIGHT MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Cek localStorage untuk tema yang tersimpan
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

// Event listener untuk toggle tema
themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    localStorage.setItem("theme", "light");
  }
});

// 2. ACCORDION/FAQ SECTION
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    // Toggle class active pada pertanyaan
    this.classList.toggle("active");

    // Ambil elemen jawaban (sibling element)
    const answer = this.nextElementSibling;

    // Toggle class show pada jawaban
    answer.classList.toggle("show");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
