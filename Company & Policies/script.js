const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
        }
    });
}, observerOptions);

// Select all elements with the hidden class
const hiddenElements = document.querySelectorAll('.section-hidden');
hiddenElements.forEach((el) => observer.observe(el));


const reveals = document.querySelectorAll(".reveal");

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add("active");
        }
    });
}, {threshold: 0.2 });

reveals.forEach(el => observer3.observe(el));

document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
    item.classList.toggle("active");
    });
});

