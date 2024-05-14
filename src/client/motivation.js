// Motivation Menu
const success_button = document.getElementById("success_button");
const success_menu = document.getElementById("success_menu");

const students_button = document.getElementById("students_button");
const students_menu = document.getElementById("students_menu");

const personalLife_button = document.getElementById("personalLife_button");
const personalLife_menu = document.getElementById("personalLife_menu");

const random_tip = document.getElementById("randomTip_button");
const random_menu = document.getElementById("random_menu");


const succTips = [
    "\"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.\" - William James",
    "\"Success is not final; failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"It is better to fail in originality than to succeed in imitation.\" - Herman Melville",
    "\"Success usually comes to those who are too busy to be looking for it.\" - Henry David Thoreau",
    "\"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.\" - Dale Carnegie",
    "\"Optimism is the one quality more associated with success and happiness than any other.\" - Brian Tracy"
]

const studentTips = [
    "\"Education is the most powerful weapon which you can use to change the world.\" - Nelson Mandela",
    "\"You've got to get up every morning with determination if you're going to go to bed with satisfaction.\" - George Lorimer",
    "\"The most difficult thing is the decision to act; the rest is merely tenacity.\" - Amelia Earhart",
    "\"A little progress each day adds up to big results.\" - Satya Nani",
    "\"A person who never made a mistake never tried anything new.\" - Albert Einstein",
    "\"The best way to predict your future is to create it.\" - Abraham Lincoln"
]

const personalLifeTips = [
    "\"Life isn't about finding yourself. Life is about creating yourself.\" - George Bernard Shaw",
    "\"Don't let yesterday take up too much of today.\" - Will Rogers",
    "\"If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.\" - Steve Jobs",
    "\"Goal setting is the secret to a compelling future.\" - Tony Robbins",
    "\"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.\" - Winston Churchill",
    "\"You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot ― it's all there. \
        Everything influences each of us, and because of that I try to make sure that my experiences are positive.\" - Maya Angelou"
]

const allTips = succTips.concat(studentTips).concat(personalLifeTips);

success_menu.style.display = "none";
students_menu.style.display = "none";
personalLife_menu.style.display = "none";
random_menu.style.display = "none";

// <!-- a frontend where you type the diary entries

//           a database to store the diary entries in
          
//           a backend that receives the entries from the frontend and puts them in said database
          
//           the backend must also be able to fetch the correct diary entry based on id or date or name
          
//           another frontend to display the diary entries -->

//document.getElementById("tip").innerText = "";

success_button.addEventListener("click", function() {
    const tip = succTips[Math.floor(Math.random() * succTips.length)];
    document.getElementById("tipSucc").innerText = tip;

    if (success_menu.style.display === "none") {
        success_menu.style.display = "block";
        students_menu.style.display = "none";
        personalLife_menu.style.display = "none";
        random_menu.style.display = "none";
    }
});

students_button.addEventListener("click", function() {
    const tip = studentTips[Math.floor(Math.random() * studentTips.length)];
    document.getElementById("tipStud").innerText = tip;

    if (students_menu.style.display === "none") {
        success_menu.style.display = "none";
        students_menu.style.display = "block";
        personalLife_menu.style.display = "none";
        random_menu.style.display = "none";
    }
});

personalLife_button.addEventListener("click", function() {
    const tip = personalLifeTips[Math.floor(Math.random() * personalLifeTips.length)];
    document.getElementById("tipPers").innerText = tip;

    if (personalLife_menu.style.display === "none") {
        success_menu.style.display = "none";
        students_menu.style.display = "none";
        personalLife_menu.style.display = "block";
        random_menu.style.display = "none";
    }
});

random_tip.addEventListener("click", function() {
    const tip = allTips[Math.floor(Math.random() * allTips.length)];
    document.getElementById("tipRand").innerText = tip;

    if (random_menu.style.display === "none") {
        success_menu.style.display = "none";
        students_menu.style.display = "none";
        personalLife_menu.style.display = "none";
        random_menu.style.display = "block";
    }
});