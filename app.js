
const form = document.querySelector("form");
const nameInput = document.querySelector('#name');
const edadInput = document.querySelector("#edad");  
const mensaje = document.querySelector("#mensaje");

function verificarEdad(event) {

    event.preventDefault();

    const nombre = nameInput.value;
    const edad = Number(edadInput.value);
    
    if (edad >= 18) {
        mensaje.textContent = 
        `✅ Bienvenido, ${nombre}, tienes acceso al evento.`;
        mensaje.classList.remove("negativo");
        mensaje.classList.add("positivo");
    } else {
        mensaje.textContent = 
        `❌ Lo sentimos, ${nombre}, debes ser mayor de edad.`;
        mensaje.classList.remove("positivo");
        mensaje.classList.add("negativo");
    }
}
form.addEventListener('submit', verificarEdad);