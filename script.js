// FUNCIÓN PARA HACER CARRUSEL AUTOMÁTICO
function iniciarCarrusel(idCarrusel, intervalo = 3000) {
    const carrusel = document.getElementById(idCarrusel);
    const imagenes = carrusel.querySelectorAll("img");
    let indice = 0;

    setInterval(() => {
        indice = (indice + 1) % imagenes.length;
        carrusel.style.transform = `translateX(-${indice * 100}%)`;
    }, intervalo);
}

// CUANDO SE CARGA LA PÁGINA
window.addEventListener("DOMContentLoaded", () => {
    iniciarCarrusel("carrusel1", 3000); // Primer gráfico
    iniciarCarrusel("carrusel2", 4000); // Segundo gráfico
});
