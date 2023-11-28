const homeCodePlanet = document.getElementById('HomeCodePlanet');
const homeWebsitesPlanet = document.getElementById('HomeWebsitesPlanet');
const homeAboutPlanet = document.getElementById('HomeAboutPlanet');
const homeContactPlanet = document.getElementById('HomeContactPlanet');

homeCodePlanet.addEventListener('click', () => {
    const scrollPosition = 0 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' 
    });
});


homeWebsitesPlanet.addEventListener('click', () => {

    const scrollPosition = 200 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' 
    });
});


homeAboutPlanet.addEventListener('click', () => {
 
    const scrollPosition = 300 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});


homeContactPlanet.addEventListener('click', () => {

    const scrollPosition = 400 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});