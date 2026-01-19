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

        // Открываем/закрываем по клику на ярлык
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });

        // Закрываем, если кликнули в любое другое место экрана
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });

        // Предотвращаем закрытие при клике внутри самой панели
        sidebar.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});
