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
    memeImg.style.filter = `brightness(${inputBrightness.value=1}) opacity(${inputOpacity.value=1}) blur(${inputBlur.value=0}) contrast(${inputContrast.value=100}%) grayscale(${inputGrayscale.value=0}%) hue-rotate(${inputHueRotation.value=0}deg) sepia(${inputSepia.value=0}%) saturate(${inputSaturation.value=100}%) invert(${inputInvert.value=0})`
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

const asideTopText = document.getElementById('aside-top-text');
const asideBottomText = document.getElementById('aside-bottom-text');

asideTopText.addEventListener("input", () =>{
    topText.innerHTML = asideTopText.value;
})

asideBottomText.addEventListener("input", () =>{
    bottomText.innerHTML = asideBottomText.value;
})

//Remover texto superior e inferior 

const topTextInput = document.getElementById('checkbox-top-text')
const bottomTextInput = document.getElementById('checkbox-bottom-text')

topTextInput.addEventListener("change", () => hideTopText());

const hideTopText = () => {
    if (topTextInput.checked) {
        topText.classList.add("hidden")
    } else {
        topText.classList.remove("hidden")
    }
};

bottomTextInput.addEventListener("change", () => hideBottomText());

const hideBottomText = () => {
    if (bottomTextInput.checked) {
    bottomText.classList.add("hidden");
    } else {
    bottomText.classList.remove("hidden");
    }
};


//Cambiar familia de fuente

const fontSelector = document.getElementById('font-selector')
    
fontSelector.addEventListener("change", () => changeFontFamily());

const changeFontFamily = () => {
    topText.style.fontFamily = fontSelector.value;
    bottomText.style.fontFamily = fontSelector.value;
}

//Cambiar tamaño de fuente

const letterFontsize = document.getElementById ('letter-fontsize')

letterFontsize.addEventListener("input", () => changeLetterFontsize());

const changeLetterFontsize = () => {
    topText.style.fontSize = `${letterFontsize.value}px`;
    bottomText.style.fontSize = `${letterFontsize.value}px`;
}

//Cambiar alineación

const buttonTextRight = document.getElementById('button-text-right')
const buttonTextCenter = document.getElementById('button-text-center')
const buttonTextLeft = document.getElementById('button-text-left')

buttonTextRight.addEventListener("click", () =>{
    console.log(buttonTextRight);
    topText.style.justifyContent = 'right';
})

buttonTextCenter.addEventListener("click", () =>{
    topText.style.justifyContent = 'center';
})

buttonTextLeft.addEventListener("click", () =>{
    topText.style.justifyContent = 'left';
})

//Cambiar color de texto

const colorText = document.getElementById('color-text');
const colorBackground = document.getElementById('color-background');
const spanColorText = document.getElementById ('span-color-text')
const spanColorBackground = document.getElementById ('span-color-background')

colorText.addEventListener('input', () => changeColorText());

const changeColorText = () => {
    topText.style.color = colorText.value;
    bottomText.style.color = colorText.value;
    spanColorText.innerHTML = colorText.value;
}

//Cambiar color de fondo de texto

colorBackground.addEventListener('input', () => changecolorBackground());

const changecolorBackground = () => {
    topText.style.backgroundColor = colorBackground.value;
    bottomText.style.backgroundColor = colorBackground.value;
    spanColorBackground.innerHTML = colorBackground.value;
}

//Fondo transparente

const checkboxTransparentBackground = document.getElementById('checkbox-transparent-backgroud');

checkboxTransparentBackground.addEventListener('input', () => checkedTransparentBackgroud())

const checkedTransparentBackgroud = () => {
    if (checkboxTransparentBackground.checked) {
        topText.style.backgroundColor = 'transparent';
        topText.style.position = 'absolute';
        bottomText.style.backgroundColor = 'transparent';    
        bottomText.style.position = 'absolute';    
        bottomText.style.bottom = '0';  
    } else {
        topText.style.backgroundColor = 'white';
        topText.style.position = 'initial';
        bottomText.style.backgroundColor = 'White';    
        bottomText.style.position = 'initial';    
    }
}

//Cambiar padding de texto

const changeLetterSpacing = document.getElementById('letter-spacing')

changeLetterSpacing.addEventListener('input', () =>{
    topText.style.padding = `${changeLetterSpacing.value}px`;
    bottomText.style.padding = `${changeLetterSpacing.value}px`;
}) 

//Cambiar alto de línea de texto

const letterLineHeight = document.getElementById('letter-line-height')

letterLineHeight.addEventListener('input',() => changeLetterLineHeight())

const changeLetterLineHeight = () => {
    topText.style.lineHeight = letterLineHeight.value;
    bottomText.style.lineHeight = letterLineHeight.value;
}

const closeAsideText = document.getElementById('close-aside-text')
const closeAsideImage = document.getElementById('close-aside-image')


closeAsideImage.addEventListener('click', () => {
    asideImg.style.display = 'none';
})

closeAsideText.addEventListener('click', () => {
    asideText.style.display = 'none';
})
