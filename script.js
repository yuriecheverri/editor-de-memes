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
console.log(clickNavText)

//function clickNavChangeMode() {
//  console.log("Cargar tema oscuro");
//}

function loadImage(){
    const url = document.getElementById('input-url').value;
    const image = new Image();
    image.src = url;
    const imageDiv = document.getElementById('imageDiv');
    imageDiv.innerHTML = '';
    imageDiv.appendChild(image);
}

//

const colorPicker = document.getElementById('color-picker')
console.log(colorPicker)
const colorName = document.getElementById('color-name')
console.log(colorName)

const cambiarFondoMeme = () => {
    console.log(colorPicker.value)
    colorName.innerHTML = colorPicker.value;
}   

colorPicker.addEventListener('input',() => cambiarFondoMeme())

//const clicNavChangeMode = () => {
//  textAside.classlist.toggle('dark-aside')
//  imgAside.classList.toggle("dark-aside");
//  mainContainer.classList.toggle("main-container-dark");
//}

//in (clickNavChangeMode.innerText === "Modo Oscuro"){
//    clickNavChangeMode.innerHTML = "Modo claro"
//} else { 
//  clickNavChangeMode = "Modo oscuro"
//}

const inputUrl =document.getElementById('input-url')
const memeImg = document.getElementById('imageDiv')

inputUrl.addEventListener('input', (e) => changeBackground(e))

const changeBackground = (e) => {
    console.log(e.target.value)
    imageDiv.style.backgroundimage = `url$(e.target.value)`
}