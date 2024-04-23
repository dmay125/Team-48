// Motivation Menu
const success_button = document.getElementById("success_button");
const success_menu = document.getElementById("success_menu");
const random_tip = document.getElementById("random_tip");


const tips = [
    "\"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.\" - William James",
    "\"Success is not final; failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"Education is the most powerful weapon which you can use to change the world.\" - Nelson Mandela",
    "\"You've got to get up every morning with determination if you're going to go to bed with satisfaction.\" —George Lorimer",
    "\"Life isn't about finding yourself. Life is about creating yourself.\" - George Bernard Shaw",
    "\"Don't let yesterday take up too much of today.\" - Will Rogers"
];


success_button.addEventListener("click", function() {

});

random_tip.addEventListener("click", function() {
    const tip = tips[Math.floor(Math.random() * tips.length)];
});