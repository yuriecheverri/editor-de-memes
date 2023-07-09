//Alternar entre paneles

const asideText = document.getElementById('textAside');
const asideImg = document.getElementById('imageAside');
const navImageButton = document.getElementById('nav-image-button');
const navTextButton = document.getElementById('nav-text-button');
const navModeButton = document.getElementById('nav-mode-button');
const headerElement = document.getElementById('header')
const mainContainer = document.getElementById('main-container')
asideText.style.display = 'none';

navTextButton.addEventListener('click', () => {
    asideImg.style.display = 'none';
    asideText.style.display = 'inline-flex';
})

navImageButton.addEventListener('click', () => {
    asideImg.style.display = 'inline-flex';
    asideText.style.display = 'none';
})

//Modo claro y modo oscuro

navModeButton.addEventListener('click', () => {
    headerElement.classList.toggle("header-light")
    mainContainer.classList.toggle("main-container-light")
    asideText.classList.toggle("aside-light")
    asideImg.classList.toggle("aside-light")

    if (mainContainer.classList.contains("main-container-light")) {
        navModeButton.innerText = "Modo Oscuro";
    } else {
        navModeButton.innerText = "Modo Claro";
    }
})

//Agregar imagen con url

const inputUrl = document.getElementById('input-url')
const memeImg = document.getElementById('imageDiv')

inputUrl.addEventListener('input', (e) => changeBackground(e))

const changeBackground = (e) => {
    memeImg.style.backgroundImage = `url('${e.target.value}')`
    memeImg.style.backgroundSize = 'cover'
    memeImg.style.backgroundRepeat = 'no-repeat'
}

//Cambiar color de fondo

const colorPicker = document.getElementById('color-picker');
const colorName = document.getElementById('color-name');

colorPicker.addEventListener('input', () => cambiarFondoMeme());

const cambiarFondoMeme = () => {
    colorName.innerHTML = colorPicker.value;
    memeImg.style.backgroundColor = colorPicker.value;
}

//Cambiar modo de mezcla de fondo

const selectChangeImg = document.getElementById('image-option')

selectChangeImg.addEventListener('input', (e) => {
    memeImg.style.backgroundBlendMode = e.target.value;
})

// Filtros

const inputBrightness = document.getElementById('brightness');
const inputOpacity = document.getElementById('opacity');
const inputContrast = document.getElementById('contrast')
const inputBlur = document.getElementById('blur')
const inputGrayscale = document.getElementById('grayscale')
const inputSepia = document.getElementById('sepia')
const inputHueRotation = document.getElementById('hue-rotation')
const inputSaturation = document.getElementById('saturation')
const inputInvert = document.getElementById('invert')

inputBrightness.addEventListener('input', () => changeValueFilters());
inputOpacity.addEventListener('input', () => changeValueFilters());
inputContrast.addEventListener('input', () => changeValueFilters());
inputBlur.addEventListener('input', () => changeValueFilters());
inputGrayscale.addEventListener('input', () => changeValueFilters());
inputSepia.addEventListener('input', () => changeValueFilters());
inputHueRotation.addEventListener('input', () => changeValueFilters());
inputSaturation.addEventListener('input', () => changeValueFilters());
inputInvert.addEventListener('input', () => changeValueFilters());

const changeValueFilters = () => {
    memeImg.style.filter = `brightness(${inputBrightness.value}) opacity(${inputOpacity.value}) blur(${inputBlur.value}) contrast(${inputContrast.value}%) grayscale(${inputGrayscale.value}%) hue-rotate(${inputHueRotation.value}) sepia(${inputSepia.value}%) saturate(${inputSaturation.value}%) invert(${inputInvert.value})`
}

const buttonResetFilters = document.getElementById('button-img')

buttonResetFilters.addEventListener('click', () => resetFilters())

const resetFilters = () => {
    console.log('hola')
}

//inputBrightness.value = 0;


//Abrir y cerrar panel
//Descargar imagen
//Restablecer filtros

//Texto
//Editar texto superior
//Remover texto superior
//Editar texto inferior
//Remover texto inferior
//Cambiar familia de fuente
//Cambiar tamaño de fuente
//Cambiar alineación
//Cambiar color de texto
//Cambiar color de fondo de texto
//Fondo transparente
//Cambiar padding de texto
//Cambiar alto de línea de texto
