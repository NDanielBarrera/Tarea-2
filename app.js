
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const edadInput = document.querySelector('#edad');  
const mensaje = document.querySelector('#mensaje');

function verificarEdad(event) {

    event.preventDefault();

    const nombre = nameInput.value;
    const edad = Number(edadInput.value);
    let textoMensaje = '';
    
    if (edad >= 18) {
        textoMensaje = 
        `✅ Bienvenido, ${nombre}, tienes acceso al evento.`;
        mensaje.classList.remove("negativo");
        mensaje.classList.add("positivo");
    } else {
        textoMensaje = 
        `❌ Lo sentimos, ${nombre}, debes ser mayor de edad.`;
        mensaje.classList.remove("positivo");
        mensaje.classList.add("negativo");
    }
    mensaje.textContent = textoMensaje;
}
form.addEventListener('submit', verificarEdad);