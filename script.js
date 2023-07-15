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

// PANEL DE IMAGEN

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

// Filtros para el meme 

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

// Reestablecer Filtros 

const buttonResetFilters = document.getElementById('button-img')

buttonResetFilters.addEventListener('click', () => resetFilters())

const resetFilters = () => {
    memeImg.style.filter = `brightness(${inputBrightness.value=1}) opacity(${inputOpacity.value=1}) blur(${inputBlur.value=1000}) contrast(${inputContrast.value=0}%) grayscale(${inputGrayscale.value=0}%) hue-rotate(${inputHueRotation.value=0}) sepia(${inputSepia.value=0}%) saturate(${inputSaturation.value=100}%) invert(${inputInvert.value=0})`
    console.log(memeImg.style.filter)
}

//Abrir y cerrar panel


//Descargar imagen

const downloadButton = document.getElementById ('nav-download-button')
const meme = document.getElementById ('main-container')

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};

//PANEL DE TEXTO 

//Editar texto superior e inferior 

const topText = document.getElementById ('top-text');
const bottomText = document.getElementById ('bottom-text');

const asideTopText = document.getElementById (aside-top-text);
const asidebottomtext = document.getElementsByClassName (aside-bottom-text);

topText.addEventListener("chnage", () =>{
    asidebottomtext.innerHTML = topText.value;
})

bottomText.addEventListener("change", () =>{
    asidebottomtext.innerHTML = bottomText.value;
})

//Remover texto superior e inferior 

const topTextInput = document.getElementById (checkbox-top-text)
const bottomTextInput = document.getElementById (checkbox-bottom-text)

topTextInput.addEventListener("change", () => hideTopText());

const hideTopText = () => {
    console.log(topTextInput)
    if (checkbox-top-text.checked) {
        topText.classList.add("hidden")
    } else {
        topText.classList.remove("hidden")
    }
};

bottomTextInput.addEventListener("change", () => hidebottomText());

const hideBottomText = () => {
    if (checkbox-bottom-text.checked) {
    bottomText.classList.add("hidden");
    } else {
    bottomText.classList.remove("hidden");
    }
};


//Cambiar familia de fuente

const fontSelector = document.getElementById ('font-selector')
    
fontSelector.addEventListener("change", () => changeFontFamily());

const changeFontFamily = () => {
    topText.style.FontFamily = `(${fontSelector.value})`
    bottomText.style.fontFamily = `(${fontSelector.value})`;
}

//Cambiar tamaño de fuente
//Cambiar alineación
//Cambiar color de texto
//Cambiar color de fondo de texto
//Fondo transparente
//Cambiar padding de texto
//Cambiar alto de línea de texto
