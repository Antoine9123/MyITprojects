const homeCodePlanet = document.getElementById('HomeCodePlanet');
const homeWebsitesPlanet = document.getElementById('HomeWebsitesPlanet');
const homeAboutPlanet = document.getElementById('HomeAboutPlanet');
const homeContactPlanet = document.getElementById('HomeContactPlanet');

// Ajoutez un gestionnaire d'événement de clic
homeCodePlanet.addEventListener('click', () => {
    // Définissez la position de défilement en pixels (par exemple, 1000 pixels)
    const scrollPosition = 0 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // Pour un défilement fluide, ajoutez cette option
    });
});

// Ajoutez un gestionnaire d'événement de clic
homeWebsitesPlanet.addEventListener('click', () => {
    // Définissez la position de défilement en pixels (par exemple, 1000 pixels)
    const scrollPosition = 200 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // Pour un défilement fluide, ajoutez cette option
    });
});

// Ajoutez un gestionnaire d'événement de clic
homeAboutPlanet.addEventListener('click', () => {
    // Définissez la position de défilement en pixels (par exemple, 1000 pixels)
    const scrollPosition = 300 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // Pour un défilement fluide, ajoutez cette option
    });
});

// Ajoutez un gestionnaire d'événement de clic
homeContactPlanet.addEventListener('click', () => {
    // Définissez la position de défilement en pixels (par exemple, 1000 pixels)
    const scrollPosition = 400 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // Pour un défilement fluide, ajoutez cette option
    });
});