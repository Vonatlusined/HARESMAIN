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
});