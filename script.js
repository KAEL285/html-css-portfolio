function toggleMenu() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active'); // Corrected quotes
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active'); // Corrected quotes
    });
});
