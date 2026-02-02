function validarFormularioContacto() {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  if (!nombre || !email || !mensaje) return false;

  // Reset status
  const status = document.getElementById("form-status");
  if (status) {
    status.classList.add("hidden");
    status.classList.remove("text-red-600", "text-green-600");
    status.textContent = "";
  }

  if (nombre.value.trim() === "" || email.value.trim() === "" || mensaje.value.trim() === "") {
    if (status) {
      status.classList.remove("hidden");
      status.classList.add("text-red-700", "bg-red-700/50", "p-2", "rounded","animate-pulse");
      status.textContent = "Por favor completa todos los campos.";
    } else {
      alert("Por favor completa todos los campos.");
    }
    return false;
  }

  const re = /\S+@\S+\.\S+/;
  if (!re.test(email.value)) {
    if (status) {
      status.classList.remove("hidden");
      status.classList.add("text-red-600");
      status.textContent = "Ingresa un correo válido.";
    } else {
      alert("Ingresa un correo válido.");
    }
    return false;
  }

  if (status) {
    status.classList.remove("hidden");
    status.classList.add("text-green-600");
    status.textContent = "Formulario válido. Abriendo WhatsApp...";
  }

  return true;
}

function enviarWhatsApp() {
  if (!validarFormularioContacto()) return;

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const texto = `Hola, mi nombre es ${nombre}. ${mensaje}`;
  const url = `https://api.whatsapp.com/send?phone=+523326678151&text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}





  const carousel = document.getElementById('carrusel')
  const slideWidth = carousel.children[0].offsetWidth + 24

  let index = 0

  setInterval(() => {
    index++
    carousel.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    })

    // volver al inicio
    if (index >= carousel.children.length -1) {
      index = 0
      setTimeout(() => {
        carousel.scrollTo({ left: 0, behavior: 'auto' })
      }, 600)
    }
  }, 2000) // 4 segundos


