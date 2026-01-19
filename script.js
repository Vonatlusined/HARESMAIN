document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');
    const header = document.querySelector('.main-header');

    if (!toggle || !sidebar || !header) return;

    // Header scroll (class-based)
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Burger
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        sidebar.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    });

    // Close on link click
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            sidebar.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });
});
