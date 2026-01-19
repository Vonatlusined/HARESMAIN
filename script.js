// 1. Прозрачность хедера при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header'); // Используем класс, так как ID нет
    if (window.scrollY > 50) {
        header.style.background = "rgba(255,255,255,0.95)";
        header.style.padding = "15px 60px";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    } else {
        header.style.background = "transparent";
        header.style.padding = "30px 60px";
        header.style.boxShadow = "none";
    }
});

// 2. Логика мобильного меню
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    if (toggle) {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggle.classList.toggle('active');
            sidebar.classList.toggle('open');
            // Блокируем скролл страницы при открытом меню
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
        });
    }

    // Закрытие меню при клике на ссылки
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            sidebar.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });

    // Закрытие при клике ВНЕ панели (только на мобилках)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            sidebar.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
});