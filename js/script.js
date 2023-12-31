const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click" , () =>{
    burger.classList.toggle("active");
    nav.classList.toggle("active");
})

// document.querySelectorAll(".nav a").forEach(n=>n.addEventListener("click", () =>{
//     burger.classList.remove("active");
//     nav.classList.remove("active");
// }))


document.getElementById('submit-button').addEventListener('click', function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("mail").value;
    const message = document.getElementById("message").value;

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+\s[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errors = {};

    function displayError(id, message) {
        errors[id] = message;
        const errorElement = document.getElementById(id + "Error");
        errorElement.textContent = message;
        errorElement.style.color = "red";
    }

    function clearError(id) {
        delete errors[id];
        const errorElement = document.getElementById(id + "Error");
        errorElement.textContent = "";
    }

    if (!fullname.match(nameRegex)) {
        displayError("fullname", "at least 3 characters long and contain only letters.");
    } else {
        clearError("fullname");
    }
    if (!email.match(emailRegex)) {
        displayError("mail", "Please enter a valid email address.");
    } else {
        clearError("mail");
    }
    if (message.trim() === "") {
        displayError("message", "Message cannot be empty.");
    } else {
        clearError("message");
    }

    if (Object.keys(errors).length === 0) {
        alert("Contact form submitted successfully!"); // You can replace this with your desired action
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".qsts");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;
            toggleAnswer(answer);
        });
    });
});

function toggleAnswer(answer) {
    if (answer.style.display === "none" || answer.style.display === "") {
        const allAnswers = document.querySelectorAll(".answer");
        allAnswers.forEach(function (answer) {
            answer.style.display = "none";
        });
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}







const viewMoreButtons = document.querySelectorAll('.viewmore');
const viewpElements = document.querySelectorAll('.viewp');
let currentlyDisplayedViewp = null;

viewMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (currentlyDisplayedViewp) {
            currentlyDisplayedViewp.style.display = 'none';
        }
        
        const viewp = viewpElements[index];
        if (viewp.style.display === 'none' || viewp.style.display === '') {
            viewp.style.display = 'block';
            currentlyDisplayedViewp = viewp;
        } else {
            viewp.style.display = 'none';
            currentlyDisplayedViewp = null;
        }
    });
});

















document.getElementById('regform').addEventListener('submit', function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const cin = document.getElementById("cin").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("phone").value;
    const plan = document.getElementById("plan").value;

    const nomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,}$/;
    const prenomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,}$/;
    const cinRegex = /^[A-Za-z]{1,2}\d{5,6}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberRegex =/^\+212[6|7][0-9]{8}$/;


    const errors = {};

    function displayError(id, message) {
        errors[id] = message;
        const errorElement = document.getElementById(id + "Error");
        errorElement.textContent = message;
        errorElement.style.color = "red";
        // errorElement.style.width = "50%";

    }

    function clearError(id) {
        delete errors[id];
        const errorElement = document.getElementById(id + "Error");
        errorElement.textContent = "";
    }

    if (!nom.match(nomRegex)) {
        displayError("nom", "at least 3 characters long and contain only letters.");
    } else {
        clearError("nom");
    }
    if (!prenom.match(prenomRegex)) {
        displayError("prenom", "at least 3 characters long and contain only letters.");
    } else {
        clearError("prenom");
    }
    if (!cin.match(cinRegex)) {
        displayError("cin", "CIN should start with a letter or two and be followed by 5 or 6 digits.");
    } else {
        clearError("cin");
    }
    if (!email.match(emailRegex)) {
        displayError("email", "Please enter a valid email address.");
    } else {
        clearError("email");
    }
    if (!telephone.match(numberRegex)) {
        displayError("phone", "Le numéro de téléphone doit commencer par +212 suivi de 6 ou 7 suivi de 8 chiffres.");
    } else {
        clearError("phone");
    }
    if (plan === "Choose a plan") {
        displayError("plan", "Please choose a plan.");
    } else {
        clearError("plan");
    }

    if (Object.keys(errors).length > 0) {
        e.preventDefault(); // Prevent form submission if there are errors
    }
    if (Object.keys(errors).length === 0) {
        alert("Registration successfull!"); // You can replace this with your desired action
    }
});



