const aboutCodePlanet = document.getElementById('AboutCodePlanet');
const aboutWebsitesPlanet = document.getElementById('AboutWebsitesPlanet');
const aboutAboutPlanet = document.getElementById('AboutAboutPlanet');
const aboutContactPlanet = document.getElementById('AboutContactPlanet');

aboutCodePlanet.addEventListener('click', () => {
    const scrollPosition = 0 * window.innerHeight / 100; 
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' 
    });
});


aboutWebsitesPlanet.addEventListener('click', () => {

    const scrollPosition = 200 * window.innerHeight / 100; 
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' 
    });
});


aboutAboutPlanet.addEventListener('click', () => {
 
    const scrollPosition = 300 * window.innerHeight / 100;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});


aboutContactPlanet.addEventListener('click', () => {

    const scrollPosition = 400 * window.innerHeight / 100; 
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});