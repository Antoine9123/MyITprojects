const CodePAGE = document.getElementById('CodePage');
const WebPAGE = document.getElementById('WebPage');
const AboutPAGE = document.getElementById('AboutPage');
const ContactPAGE = document.getElementById('ContactPage');

CodePAGE.addEventListener('click', () => {
    const scrollPosition = 0 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' 
    });
});


WebPAGE.addEventListener('click', () => {

    const scrollPosition = 200 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' 
    });
});


AboutPAGE.addEventListener('click', () => {
 
    const scrollPosition = 300 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});


ContactPAGE.addEventListener('click', () => {

    const scrollPosition = 400 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});