document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.bg-motion');
    const introContent = document.querySelector('.intro-content');
    const header = document.querySelector('.main-header');
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');

    // 1. ПАРАЛЛАКС ФОНА (ОТ МЫШКИ)
    document.addEventListener('mousemove', (e) => {
        if (bg) {
            const x = (e.clientX / window.innerWidth - 0.5) * 45;
            const y = (e.clientY / window.innerHeight - 0.5) * 45;
            bg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
    });

    // 2. ЭФФЕКТ РАСТЕКАНИЯ ТЕКСТА И ХЕДЕР ПРИ СКРОЛЛЕ
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;

        // Растекание заголовка
        if (introContent) {
            const scale = 1 + scrollValue / 400;
            const opacity = 1 - scrollValue / 600;
            const blur = scrollValue / 40;

            introContent.style.transform = `scale(${scale})`;
            introContent.style.opacity = opacity;
            introContent.style.filter = `blur(${blur}px)`;
        }

        // Фон хедера (Темный матовый)
        if (header) {
            if (scrollValue > 50) {
                header.style.background = "rgba(0, 0, 0, 0.7)";
                header.style.backdropFilter = "blur(15px)";
                header.style.padding = "15px 60px";
            } else {
                header.style.background = "transparent";
                header.style.backdropFilter = "none";
                header.style.padding = "30px 60px";
            }
        }
    });

    // 3. БУРГЕР-МЕНЮ
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            toggle.classList.toggle('active');
        });
    }
});
const contactForm = document.querySelector('.hares-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Останавливаем перезагрузку страницы

        // Собираем все данные из полей
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        // Специально для радио-кнопок и селектов (проверка)
        console.log("Данные формы HARES:", data);

        // Эффект на кнопке при отправке
        const btn = this.querySelector('.submit-btn');
        const originalText = btn.innerText;

        btn.innerText = "Wird gesendet...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Имитация отправки (здесь потом будет твой PHP или API)
        setTimeout(() => {
            alert("Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.");
            btn.innerText = originalText;
            btn.style.opacity = "1";
            btn.disabled = false;
            this.reset(); // Очистить форму
        }, 1500);
    });
}