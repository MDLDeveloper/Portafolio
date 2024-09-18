const MAIL_URL = "http://localhost/portafoliocoment/send-email.php"

import { viewAlert, chargeSpinner, quitSpinner } from "./modal_alerts.js";

const form = document.getElementById("formcontact")
form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendToMsj();
    form.reset()
});


const sendToMsj = () => {
    let fullname = document.getElementById('nyp').value;
    let email = document.getElementById('email').value;
    let msj = document.getElementById('msj').value;

    console.log(fullname, email, msj);

    const data = {
        fullname: fullname,
        email: email,
        msj: msj
    };

    chargeSpinner(); // Mostrar el spinner antes de iniciar la petición

    fetch(MAIL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result.success);
        quitSpinner()
        if(result.success === true){
            viewAlert("Mensaje enviado", "Se envió el mensaje correctamente, en breves me comunicaré con usted.");
        }else{
            viewAlert("Error002", "Hubo un problema al enviar el mensaje. Inténtelo nuevamente.");
            console.error(result.error);
        }
    })
    .catch(error => {
        console.error(error);
        quitSpinner()
        viewAlert("Error003", "Hubo un problema al enviar el mensaje. Inténtelo nuevamente.");
    })
};

const buttons = document.querySelectorAll('.buttonTransition');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('animate__flip');
    });

    button.addEventListener('mouseout', () => {
        button.classList.remove('animate__flip');
    });
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.carousel-content').style.transform = `translateX(-${currentSlide * 100}%)`;
}

const socialbts = document.querySelectorAll('.socialbtn a');
