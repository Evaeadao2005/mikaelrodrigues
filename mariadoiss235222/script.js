// Efeito de fade-in para a seção secreta
const secaoSecreta = document.querySelector('.secao-secreta');
window.addEventListener('scroll', () => {
    const secaoPosicao = secaoSecreta.getBoundingClientRect().top;
    const telaPosicao = window.innerHeight / 1.3;

    if (secaoPosicao < telaPosicao) {
        secaoSecreta.style.opacity = '1';
        secaoSecreta.style.transform = 'translateY(0)';
    }
});
