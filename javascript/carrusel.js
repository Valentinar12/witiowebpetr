let index = 0;
const images = document.querySelectorAll('.imagen');
images[index].classList.add('active'); // Muestra la primera imagen

document.getElementById('next').onclick = function() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length; // Incrementa el índice y vuelve al inicio si llega al final
    images[index].classList.add('active');
};

document.getElementById('prev').onclick = function() {
    images[index].classList.remove('active');
    index = (index - 1 + images.length) % images.length; // Decrementa el índice y vuelve al final si llega al principio
    images[index].classList.add('active');
};


