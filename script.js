function clickNavImg() {
    const asideText = document.getElementById('asideText');
    const asideImg = document.getElementById('asideImg');
    asideImg.style.display = 'inline-flex';
    asideText.style.display = 'none';
}

function clickNavText() {
    const asideText = document.getElementById('asideText');
    const asideImg = document.getElementById('asideImg');
    asideImg.style.display = 'none';
    asideText.style.display = 'inline-flex';
}

function clickNavChangeTheme() {
    console.log("Cargar tema oscuro");
}

function loadImage(){
    const url = document.getElementById('url').value;
    const image = new Image();
    image.src = url;
    const imageDiv = document.getElementById('imageDiv');
    imageDiv.innerHTML = '';
    imageDiv.appendChild(image);
}