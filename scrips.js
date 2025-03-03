/* script.js */
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-300px" : "0px";
}

document.addEventListener("DOMContentLoaded", () => {
    // Animaciones al hacer scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Validación del formulario
    const form = document.getElementById("contact-form");
    const messageDiv = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = this.nombre.value.trim();
        const email = this.email.value.trim();
        const mensaje = this.mensaje.value.trim();

        if (nombre && email && mensaje) {
            messageDiv.textContent = "Tu mensaje ha sido enviado con éxito.";
            messageDiv.classList.add("success");
            messageDiv.style.display = "block";
            form.reset();
        } else {
            messageDiv.textContent = "Por favor, completa todos los campos.";
            messageDiv.classList.add("error");
            messageDiv.style.display = "block";
        }
    });
});