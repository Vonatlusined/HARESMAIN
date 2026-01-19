document.addEventListener('DOMContentLoaded', function() {
    // 1. Скролл хедера
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255,255,255,0.95)";
            header.style.padding = "10px 60px";
        } else {
            header.style.background = "transparent";
            header.style.padding = "30px 60px";
        }
    });

    // 2. Логика мобильного меню
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    if (toggle) {
        toggle.addEventListener('click', function() {
            toggle.classList.toggle('active');
            sidebar.classList.toggle('open');
            // Запрещаем скролл, когда меню открыто
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
        });
    }

    // Закрытие при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            sidebar.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });
});