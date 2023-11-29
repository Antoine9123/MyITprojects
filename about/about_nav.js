const aboutCodePlanet = document.getElementById('AboutCodePlanet');
const aboutWebsitesPlanet = document.getElementById('AboutWebsitesPlanet');
const aboutHomePlanet = document.getElementById('AboutHomePlanet');
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


aboutHomePlanet.addEventListener('click', () => {
 
    const scrollPosition = 100 * window.innerHeight / 100;
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