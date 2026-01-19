document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');
    const header = document.querySelector('.main-header');

    if (!toggle || !sidebar || !header) return;

    // 1. Скролл хедера (добавляем класс для смены фона)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 255, 255, 0.98)";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.background = "transparent";
            header.style.boxShadow = "none";
        }
    });

    // 2. Логика Бургера (Открыть / Закрыть)
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle.classList.toggle('active');
        sidebar.classList.toggle('open');

        // Блокируем скролл страницы при открытом меню
        if (sidebar.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // 3. Закрытие при клике на любую ссылку в меню
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            sidebar.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // 4. Закрытие при клике мимо меню (важно для Safari)
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            sidebar.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});