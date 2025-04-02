// Supports weights 100-900
console.log("hola mundo");

function copyEmail() {
    event.preventDefault();
    const emailElement = document.getElementById("email-link");
    const email = emailElement.childNodes[emailElement.childNodes.length - 1].nodeValue.trim();
    navigator.clipboard.writeText(email).then(() => {
        const message = document.getElementById("message");
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none"
        }, 2000);
    }).catch(err => console.error("Error al copiar: ", err)
    );
}
