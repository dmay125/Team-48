//Setting up the Pages
let garden_button = document.getElementById("garden");
let positivity_button = document.getElementById("positivity-center");
let motivation_button = document.getElementById("motivation-menu");
let sound_button = document.getElementById("sound-center");

let garden_page = document.getElementById("garden-page");
let positivity_page = document.getElementById("positivity-page");
let motivation_page = document.getElementById("motivation-page");
let sound_page = document.getElementById("sound-page");

garden_page.hidden = true;
positivity_page.hidden = true;
motivation_page.hidden = true;
sound_page.hidden = true;

garden_button.addEventListener("click", ()=>{
    garden_page.hidden = false; 
    positivity_page.hidden = true;
    motivation_page.hidden = true;
    sound_page.hidden = true;
})

positivity_button.addEventListener("click", ()=>{
    garden_page.hidden = true; 
    positivity_page.hidden = false;
    motivation_page.hidden = true;
    sound_page.hidden = true;
})

motivation_button.addEventListener("click", ()=>{
    garden_page.hidden = true; 
    positivity_page.hidden = true;
    motivation_page.hidden = false;
    sound_page.hidden = true;
})

sound_button.addEventListener("click", ()=>{
    garden_page.hidden = true; 
    positivity_page.hidden = true;
    motivation_page.hidden = true;
    sound_page.hidden = false;
})
