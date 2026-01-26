document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.bg-motion');
    const introContent = document.querySelector('.intro-content');
    const header = document.querySelector('.main-header');
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');
    const revealElements = document.querySelectorAll('.reveal-text');

    // 1. ПАРАЛЛАКС ФОНА
    document.addEventListener('mousemove', (e) => {
        if (bg) {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            bg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
    });

    // 2. СКРОЛЛ ЭФФЕКТЫ
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;

        // Эффект для интро
        if (introContent) {
            const scale = 1 + scrollValue / 500;
            const opacity = 1 - scrollValue / 700;
            const blur = scrollValue / 50;
            introContent.style.transform = `scale(${scale})`;
            introContent.style.opacity = opacity;
            introContent.style.filter = `blur(${blur}px)`;
        }

        // Хедер
        if (header) {
            if (scrollValue > 50) {
                header.style.background = "rgba(0, 0, 0, 0.8)";
                header.style.backdropFilter = "blur(10px)";
                header.style.padding = "15px 60px";
            } else {
                header.style.background = "transparent";
                header.style.backdropFilter = "none";
                header.style.padding = "30px 60px";
            }
        }

        // Появление текста при скролле
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add('visible');
            }
        });
    });

    // 3. УПРАВЛЕНИЕ МЕНЮ
    if (toggle && sidebar) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });
    }

    // Закрытие сайдбара при клике вне его
    document.addEventListener('click', (e) => {
        if (sidebar && !sidebar.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // 4. ОБРАБОТКА ФОРМЫ
    const contactForm = document.querySelector('.hares-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.innerText;

            btn.innerText = "Wird gesendet...";
            btn.disabled = true;

            setTimeout(() => {
                alert("Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.");
                btn.innerText = originalText;
                btn.disabled = false;
                this.reset();
            }, 1500);
        });
    }
});