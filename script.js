document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-imagens');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const scrollAmount = 250; // Ajuste este valor para mudar a quantidade de pixels rolados por clique

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});