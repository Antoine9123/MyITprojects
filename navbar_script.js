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
    document.body.style.backgroundColor = '#540A0C'; 
    document.body.style.color = '#E0A03F';
    CodePAGE.style.color ='#E0A03F'
    WebPAGE.style.color ='#E0A03F'
    AboutPAGE.style.color ='#E0A03F'
    ContactPAGE.style.color ='#E0A03F'
});


WebPAGE.addEventListener('click', () => {

    const scrollPosition = 200 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' 
    });
    document.body.style.backgroundColor = '#9E2A2B'; 
    document.body.style.color = '#E0A03F';
    CodePAGE.style.color ='#E0A03F'
    WebPAGE.style.color ='#E0A03F'
    AboutPAGE.style.color ='#E0A03F'
    ContactPAGE.style.color ='#E0A03F'
});


AboutPAGE.addEventListener('click', () => {
 
    const scrollPosition = 300 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    document.body.style.backgroundColor = '#E0A03F'; 
    document.body.style.color = '#9E2A2B';
    CodePAGE.style.color ='#9E2A2B'
    WebPAGE.style.color ='#9E2A2B'
    AboutPAGE.style.color ='#9E2A2B'
    ContactPAGE.style.color ='#9E2A2B'
});


ContactPAGE.addEventListener('click', () => {

    const scrollPosition = 400 * window.innerHeight / 100; // 50vh
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    document.body.style.backgroundColor = '#FFF3B0'; 
    document.body.style.color = '#355C66';
    CodePAGE.style.color ='#355C66'
    WebPAGE.style.color ='#355C66'
    AboutPAGE.style.color ='#355C66'
    ContactPAGE.style.color ='#355C66'
});