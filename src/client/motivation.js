// Motivation Menu
const success_button = document.getElementById("success_button");
const success_menu = document.getElementById("success_menu");

const students_button = document.getElementById("students_button");
const students_menu = document.getElementById("students_menu");

const personalLife_button = document.getElementById("personalLife_button");
const personalLife_menu = document.getElementById("personalLife_menu");

const random_tip = document.getElementById("random_tip");
const tip_box = document.getElementById("tip_box");


const succTips = [
    "\"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.\" - William James",
    "\"Success is not final; failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"It is better to fail in originality than to succeed in imitation.\" - Herman Melville",
    "\"Success usually comes to those who are too busy to be looking for it.\" - Henry David Thoreau"
]






const tips = [
    "\"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.\" - William James",
    "\"Success is not final; failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"It is better to fail in originality than to succeed in imitation.\" - Herman Melville",
    "\"Success usually comes to those who are too busy to be looking for it.\" - Henry David Thoreau",
    "\"Education is the most powerful weapon which you can use to change the world.\" - Nelson Mandela",
    "\"You've got to get up every morning with determination if you're going to go to bed with satisfaction.\" —George Lorimer",
    "\"The most difficult thing is the decision to act; the rest is merely tenacity.\" - Amelia Earhart",
    "\"A little progress each day adds up to big results.\" - Satya Nani",
    "\"Life isn't about finding yourself. Life is about creating yourself.\" - George Bernard Shaw",
    "\"Don't let yesterday take up too much of today.\" - Will Rogers",
    "\"If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.\" - Steve Jobs",
    "\"Goal setting is the secret to a compelling future.\" - Tony Robbins"
];

success_menu.style.display = "none";
students_menu.style.display = "none";
personalLife_menu.style.display = "none";
tip_box.style.display = "block";
document.getElementById("tip").innerText = tips[Math.floor(Math.random() * tips.length)];

success_button.addEventListener("click", function() {
    if (success_menu.style.display === "none") {
        success_menu.style.display = "block";
        students_menu.style.display = "none";
        personalLife_menu.style.display = "none";
        tip_box.style.display = "none";
    }
});

students_button.addEventListener("click", function() {
    if (students_menu.style.display === "none") {
        success_menu.style.display = "none";
        students_menu.style.display = "block";
        personalLife_menu.style.display = "none";
        tip_box.style.display = "none";
    }
});

personalLife_button.addEventListener("click", function() {
    if (personalLife_menu.style.display === "none") {
        success_menu.style.display = "none";
        students_menu.style.display = "none";
        personalLife_menu.style.display = "block";
        tip_box.style.display = "none";
    }
});

random_tip.addEventListener("click", function() {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").innerText = tip;

    if (tip_box.style.display === "none") {
        success_menu.style.display = "none";
        students_menu.style.display = "none";
        personalLife_menu.style.display = "none";
        tip_box.style.display = "block";
    }
});