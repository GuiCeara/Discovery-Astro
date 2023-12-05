// Animação de revelação 
window.sr = ScrollReveal({ reset: true });

sr.reveal('.text-1', { duration: 1800 });;
sr.reveal('.text-2', { duration: 1800 });;
sr.reveal('.title-inicialise', { 
    rotate: { x: 0, y: 20, z:0 },
    duration: 3000 
});
sr.reveal('.text-inicialise', { 
    rotate: { x: 0, y: 25, z:0 },
    duration: 3000 
});