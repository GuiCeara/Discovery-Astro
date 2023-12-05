const containerPic = document.getElementById("container-welcome");
const valueTime = 600;
const lista = [
    "../public/img/carrossel/lighthouse-6785763_1920.jpg",
    "../public/img/carrossel/galaxy-11098_1920.jpg",
    "../public/img/carrossel/galaxy-3608029_1920.jpg",
    "../public/img/carrossel/orion-nebula-11107_1920.jpg",
];

let cont = 0; // Inicia com a primeira imagem
let intervalId; // Variável para armazenar o ID do intervalo
let inactiveTimeout; // Variável para armazenar o ID do timeout de inatividade
const inactiveDuration = 3000; // Duração em milissegundos para considerar como inatividade

document.getElementById("container-next").addEventListener("click", () => {
    cont = (cont + 1) % lista.length; // Avança para a próxima imagem ou volta para a primeira
    changePic('right');
    stopLoop();
    resetInactiveTimeout();
});

document.getElementById("container-previous").addEventListener("click", () => {
    cont = (cont - 1 + lista.length) % lista.length; // Avança para a próxima imagem ou volta para a última
    changePic('left');
    stopLoop();
    resetInactiveTimeout();
});

// Função para iniciar o loop automático
function startLoop() {
    intervalId = setInterval(() => {
        cont = (cont + 1) % lista.length;
        changePic('right');
    }, 3000); // Defina o intervalo desejado (em milissegundos)
}

// Função para parar o loop
function stopLoop() {
    clearInterval(intervalId);
}

// Função para reiniciar o loop após inatividade
function resetInactiveTimeout() {
    clearTimeout(inactiveTimeout);
    inactiveTimeout = setTimeout(() => {
        startLoop();
    }, inactiveDuration);
}

function changePic(pos) {
    let animPos = "animacao-carrossel-"+pos;
    console.log(animPos);
    document.body.classList.add('no-scrollbar');
    containerPic.style.animation = animPos+" 0.8s linear";
    console.log(containerPic.style.animation)
    setTimeout(() => {
        containerPic.style.transition = "0.8s";
        containerPic.style.backgroundImage = `url(${lista[cont]})`;
        containerPic.style.removeProperty('animation');

        setTimeout(() => {
            document.body.classList.remove('no-scrollbar');
        }, valueTime);
    }, valueTime);
}

// Inicia o loop automaticamente
startLoop();
