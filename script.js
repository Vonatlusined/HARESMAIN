window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = "rgba(255,255,255,0.95)";
        header.style.padding = "15px 60px";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    } else {
        header.style.background = "transparent";
        header.style.padding = "30px 60px";
        header.style.boxShadow = "none";
    }
    document.addEventListener('DOMContentLoaded', function() {
        const sidebar = document.querySelector('.services-sidebar');
        const trigger = document.querySelector('.sidebar-trigger');

        document.addEventListener('DOMContentLoaded', function() {
            const toggle = document.getElementById('mobile-toggle');
            const sidebar = document.querySelector('.services-sidebar');
            const navLinks = document.querySelectorAll('.sidebar-nav a');

            // Клик по бургеру
            toggle.addEventListener('click', function() {
                toggle.classList.toggle('active');
                sidebar.classList.toggle('open');
                // Запрещаем скролл страницы, когда меню открыто
                document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
            });

            // Закрытие при клике на любую ссылку
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    toggle.classList.remove('active');
                    sidebar.classList.remove('open');
                    document.body.style.overflow = 'auto';
                });
            });
        });
    });
});
