const splash = document.querySelector('.splash');

document.addEventListener('keypress', (event)=> {
        splash.classList.add('display-none');
});



const charCode = document.getElementById('charCode');
const pressKey = document.getElementById('key');
const pressCode = document.getElementById('code');
// const visibleStart = document.getElementById('visibleStart');


// document.addEventListener("keypress", () => {
//     console.log("hurray , you've pressed a key")

// })




document.addEventListener("keypress", (event) => {
    charCode.textContent = event.charCode
    pressKey.textContent = event.key
    pressCode.textContent = event.code
})




// drum example using buttons in stead of keys
//_____________________________________________

// const playCymbalSound = document.getElementById('cymbalSound')

// playCymbalSound.addEventListener("click", () => {
//     console.log('play cymbal sound now')
//     // play sound file
// })