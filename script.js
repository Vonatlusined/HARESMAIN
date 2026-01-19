document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.services-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (!toggle || !sidebar) return;

    // BURGER CLICK
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        sidebar.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    });

    // CLOSE ON LINK CLICK
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', () => closeMenu());
    });

    // OVERLAY CLICK
    overlay.addEventListener('click', () => closeMenu());

    // SWIPE TO CLOSE
    let startX = 0;

    sidebar.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
    });

    sidebar.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].screenX;
        if (endX - startX > 60) closeMenu();
    });

    function closeMenu() {
        toggle.classList.remove('active');
        sidebar.classList.remove('open');
        document.body.classList.remove('menu-open');
    }
});
