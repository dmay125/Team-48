let button1 = document.getElementById("garden");
let page1 = document.getElementById("content");
page1.hidden = true;
button1.addEventListener("click", ()=>{
page1.hidden = false; 
})