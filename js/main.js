const MAIL_URL = ""

const form = document.getElementById("formcontact")
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    sendToMsj();
})

const sendToMsj = ()=>{
    let fullname = document.getElementById('nyp').value;
    let email = document.getElementById('email').value;
    let msj = document.getElementById('msj').value;

    console.log(fullname,email,msj);

    const data ={
        fullname: fullname,
        email: email,
        msj: msj
    }

    fetch(MAIL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {console.log(result)})
    .catch(error => {console.error(error)})
}
