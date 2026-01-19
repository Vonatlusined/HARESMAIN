document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');

    if (toggle && sidebar) {
        // Открыть/Закрыть по кнопке
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggle.classList.toggle('active');
            sidebar.classList.toggle('open');
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
        });

        // Закрыть при клике на любую ссылку в меню
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                sidebar.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });

        // Закрыть, если кликнули мимо меню (в пустую область слева)
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
                toggle.classList.remove('active');
                sidebar.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
        });
    }
});