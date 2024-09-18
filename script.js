const html = document.documentElement;

function toggleMode() {

    html.classList.toggle('light');
    const image = document.querySelector('.profile img');

    if (html.classList.contains('light')) {

        image.setAttribute('src', './assets/avatar-light.png');
        image.setAttribute('alt', 'Imagem do Mayk Brito de camiseta preta com fundo amarelo');

    } else {
        
        image.setAttribute('src', './assets/avatar.png');
        image.setAttribute('alt', 'Imagem do Mayk Brito de camisa preta com fundo azul e roxo, usando óculos escuros');

    }
     
};