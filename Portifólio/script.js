document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DE DIGITAÇÃO ---
    const elementoNome = document.getElementById('texto-nome');
    const elementoFuncao = document.getElementById('texto-funcao');
    const textoNome = "Eduardo Rech"; 
    const textoFuncao = "Desenvolvedor Front-end";

    // Garante que os elementos existem antes de tentar usá-los
    if (elementoNome && elementoFuncao) {
        const digitar = (texto, elemento, callback) => {
            let i = 0;
            const intervalo = setInterval(() => {
                if (i < texto.length) {
                    elemento.innerHTML += texto.charAt(i);
                    i++;
                } else {
                    clearInterval(intervalo);
                    if (callback) {
                        setTimeout(callback, 400);
                    }
                }
            }, 120);
        };

        // Inicia a digitação do nome e, ao terminar, inicia a da função
        digitar(textoNome, elementoNome, () => {
            digitar(textoFuncao, elementoFuncao, null);
        });
    }

    // --- ANIMAÇÃO AO ROLAR A PÁGINA ---
    const elementosAnimados = document.querySelectorAll('.animar-aparecer');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observador.unobserve(entrada.target); // Para de observar após animar
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    elementosAnimados.forEach(elemento => {
        observador.observe(elemento);
    });

});