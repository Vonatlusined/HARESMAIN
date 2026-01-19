document.addEventListener('DOMContentLoaded', function() {
    const header = classExists('.main-header') ? document.querySelector('.main-header') : null;
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    // 1. Прозрачность хедера при скролле
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.background = "rgba(255,255,255,0.95)";
                header.style.padding = "15px 60px";
            } else {
                header.style.background = "transparent";
                header.style.padding = "30px 60px";
            }
        }
    });

    // 2. Логика мобильного меню (Бургер)
    if (toggle && sidebar) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggle.classList.toggle('active');
            sidebar.classList.toggle('open');
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
        });
    }

    // 3. Закрытие при клике на ссылки
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (toggle) toggle.classList.remove('active');
            if (sidebar) sidebar.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });

    // Вспомогательная функция
    function classExists(className) {
        return document.querySelector(className) !== null;
    }
});