const containerPic = document.getElementById("container-welcome");
let cont = -1;
const lista = [
    "../public/img/lighthouse-6785763_1920.jpg",
    "../public/img/galaxy-11098_1920.jpg",
    ""
];

document.getElementById("container-next").addEventListener("click", () => {
    cont++
    changePic(1, cont);
});

function changePic(status, cont) {
    console.log(cont)
    if(status == 1) {
        if(cont <= lista.length) {
            containerPic.style.transition = "0.5s";
            containerPic.style.backgroundImage = `url(${lista[cont]})`;
        }

    }
}