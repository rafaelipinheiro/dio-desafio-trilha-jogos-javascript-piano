const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keyCheck = document.querySelector(".key-check input");

let audio = new Audio("./src/tunes/a.wav");
let mapedKeys = [];

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 150);
};

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle("hide")); //se tem a classe ele remove, senão ele adiciona
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", ()=>playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});

volumeSlider.addEventListener("input", handleVolume);

keyCheck.addEventListener("input", showHideKeys);