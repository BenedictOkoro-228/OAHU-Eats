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