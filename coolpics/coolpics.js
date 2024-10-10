document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu');
    const nav = document.querySelector('nav');


    menuButton.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});

function viewerTemplate(pic, alt) {
    return `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {

    const clickedElement = event.target;


    if (clickedElement.tagName === 'IMG') {

        const imageSrc = clickedElement.getAttribute('src');

        const imageParts = imageSrc.split('-');

        const fullImageSrc = imageParts[0] + '-full.jpeg';

        const altText = clickedElement.getAttribute('alt');

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, altText));

        const viewerElement = document.querySelector('.viewer');
        viewerElement.style.visibility = 'visible';  

        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const viewerElement = document.querySelector('.viewer');
    if (viewerElement) {
        viewerElement.remove(); 
    }
}

const gallery = document.querySelector('.gallery');
if (gallery) {
    gallery.addEventListener('click', viewHandler);
}
